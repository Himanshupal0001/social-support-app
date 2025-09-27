import ControlledTextArea from '@/components/controlledUI/ControlledTextArea';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useWatch, type Control, useFormContext } from 'react-hook-form';
import { IoSparklesSharp } from 'react-icons/io5';
import AIModel from '@/components/AIModel';
import { OPENAISERVICE } from '@/services/api/open-ai';
import { useTranslation } from 'react-i18next';

type FormData = {
  // Step 1: Personal Information
  name: string;
  nationalId: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other' | 'prefer_not';
  address: string;
  city: string;
  state: string;
  country: string;
  phoneNumber: string;
  email: string;
  // Step 2: Family and Financial Info
  maritalStatus: string;
  dependents: number;
  employmentStatus: string;
  monthlyIncome: number | null;
  housingStatus: string;
  // Step 3: Situation Descriptions
  financialSituation: string;
  employmentCircumstances: string;
  reasonForApplying: string;
};

type TSituationDescriptionsAiHelpFormProps = {
  control: Control<FormData>;
};

type FieldNames =
  | 'financialSituation'
  | 'employmentCircumstances'
  | 'reasonForApplying';

const SituationDescriptionsAiHelpForm = ({
  control,
}: TSituationDescriptionsAiHelpFormProps) => {
  const [askAiFieldName, setAskAiFieldName] = useState<FieldNames>();
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const [aiSuggesstion, setAiSuggesstion] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const SAMPLE_AI_PHRASE = useRef<string>('');

  const { t } = useTranslation();
  const form = t('forms.situationDescriptions', {
    returnObjects: true,
  }) as Record<
    string,
    {
      label: string;
      helpMeWrite: string;
      required: string;
      placeholder: string;
    }
  >;
  const { setValue } = useFormContext();

  const fieldValues = useWatch({
    name: [
      'financialSituation',
      'employmentCircumstances',
      'reasonForApplying',
    ],
    control,
  }) as [string, string, string];

  const [financialSituation, employmentCircumstances, reasonForApplying] =
    fieldValues;

  const fieldValueMap: Record<FieldNames, string> = {
    financialSituation: financialSituation || '',
    employmentCircumstances: employmentCircumstances || '',
    reasonForApplying: reasonForApplying || '',
  };

  const getCurrentFieldValue = (fieldName: FieldNames): string => {
    return fieldValueMap[fieldName];
  };

  //for ai context
  const watchValues = useWatch({
    name: [
      'name',
      'dependents',
      'maritalStatus',
      'housingStatus',
      'employmentStatus',
    ],
    control,
  }) as [string, number, string, string, string];

  const [name, dependents, maritalStatus, housingStatus, employmentStatus] =
    watchValues;

  const getSamplePhrase = (fieldName: FieldNames) => {
    const phrases = {
      financialSituation: `I am currently facing financial challenges due to ${employmentStatus}. This has impacted my ability to meet essential expenses including housing, utilities, and daily necessities. I am seeking support through this program to help stabilize my financial situation while I work towards long-term stability.`,
      employmentCircumstances: `My employment circumstances have been affected by ${employmentStatus}. This situation has created financial instability and challenges in meeting my family's needs. I am applying for support to help bridge this difficult period while I work towards more stable employment.`,
      reasonForApplying: `I am applying for social support because my current situation with ${employmentStatus} has made it difficult to provide for my ${
        dependents > 0 ? `${dependents} dependents` : 'family'
      }. The support would help me maintain stability while working towards long-term financial independence.`,
    };

    return (
      phrases[fieldName] ||
      `I am currently facing ${fieldName} challenges due to ${employmentStatus}. This has impacted my ability to meet essential expenses including housing, utilities, and daily necessities. I am seeking support through this program to help stabilize my financial situation while I work towards long-term stability.`
    );
  };
  const handleHelpMeWrite = (fieldName: FieldNames) => {
    const currentValue = getCurrentFieldValue(fieldName);
    const hasExistingText = currentValue && currentValue.trim().length > 0;

    SAMPLE_AI_PHRASE.current = getSamplePhrase(fieldName);

    setAskAiFieldName(fieldName);
    setAiLoading(false);
    setAiError('');
    setIsEditing(false);

    if (hasExistingText) {
      setAiSuggesstion(currentValue);
    } else {
      setAiSuggesstion(SAMPLE_AI_PHRASE.current);
    }
  };

  const handleGenerateResponse = useCallback(async () => {
    if (!askAiFieldName) return;

    setAiLoading(true);
    setAiError('');

    const contextSnippet = [
      `Name: ${name || '(unknown)'}`,
      `Dependents: ${dependents || '(unknown)'}`,
      `Marital Status: ${maritalStatus || '(unknown)'}`,
      `Housing Status: ${housingStatus || '(unknown)'}`,
      `Employment: ${employmentStatus || '(unknown)'}`,
    ].join(' | ');

    const FIELD_LABEL_HASH: Record<FieldNames, string> = {
      financialSituation: 'Current Financial Situation',
      employmentCircumstances: 'Employment Circumstances',
      reasonForApplying: 'Reason for Applying',
    };

    const fieldLabel = FIELD_LABEL_HASH[askAiFieldName];
    const prompt = `Write a clear, empathetic paragraph for: ${fieldLabel} with the following context: ${contextSnippet}. Keep it between 60-180 words, respectful, and professional. Start with "I am currently..." if appropriate.`;

    // Use current dialog text as context if user has edited it
    const userPrompt =
      aiSuggesstion && aiSuggesstion !== SAMPLE_AI_PHRASE.current
        ? `Based on this context: "${aiSuggesstion}", write a clear, empathetic paragraph for: ${fieldLabel} with the following context: ${contextSnippet}. Keep it between 60-180 words, respectful, and professional. If the given context is not related to the ${fieldLabel} or related to the user's personal situation, politely redirect the user by saying:""`
        : prompt;

    try {
      const result = await OPENAISERVICE.generateText(
        userPrompt,
        contextSnippet
      );
      setAiSuggesstion(result.choices[0].message.content);
      setAiLoading(false);
    } catch (error) {
      console.warn('error:', error);
      setAiLoading(false);
      setAiError('Network error. Please try again.');
    }
  }, [
    askAiFieldName,
    aiSuggesstion,
    SAMPLE_AI_PHRASE,
    name,
    dependents,
    maritalStatus,
    housingStatus,
    employmentStatus,
  ]);

  const handleClickDiscard = () => {
    if (!askAiFieldName) return;
    // TODO: close modal, reset states related to ai
    resetAiFields();
  };

  const resetAiFields = () => {
    setAiLoading(false);
    setAiError('');
    setAiSuggesstion('');
    setAskAiFieldName(undefined);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleAccept = () => {
    if (!askAiFieldName) return;
    setValue(askAiFieldName, aiSuggesstion);
    resetAiFields();
  };

  useEffect(() => {
    if (askAiFieldName) {
      handleGenerateResponse();
    }
  }, [askAiFieldName, handleGenerateResponse]);

  return (
    <>
      <div className="space-y-4">
        <div className="flex-1">
          <ControlledTextArea
            name="financialSituation"
            control={control}
            label={form['financialSituation'].label}
            renderExtraLabel={
              <div className="flex flex-1 flex-row justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleHelpMeWrite('financialSituation')}
                >
                  <IoSparklesSharp className="text-primary" />{' '}
                  {form['financialSituation'].helpMeWrite}
                </Button>
              </div>
            }
            rules={{
              required: form['financialSituation'].required,
            }}
            textAreaProps={{
              placeholder: form['financialSituation'].placeholder,
              maxLength: 500,
            }}
            className="w-full"
          />
        </div>

        <div className="flex-1">
          <ControlledTextArea
            name="employmentCircumstances"
            control={control}
            label={form['employmentCircumstances'].label}
            renderExtraLabel={
              <div className="flex flex-1 flex-row justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleHelpMeWrite('employmentCircumstances')}
                >
                  <IoSparklesSharp className="text-primary" />{' '}
                  {form['employmentCircumstances'].helpMeWrite}
                </Button>
              </div>
            }
            rules={{
              required: form['employmentCircumstances'].required,
            }}
            textAreaProps={{
              placeholder: form['employmentCircumstances'].placeholder,
              maxLength: 500,
            }}
            className="w-full"
          />
        </div>

        <div className="flex-1">
          <ControlledTextArea
            name="reasonForApplying"
            control={control}
            label={form['reasonForApplying'].label}
            renderExtraLabel={
              <div className="flex flex-1 flex-row justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleHelpMeWrite('reasonForApplying')}
                >
                  <IoSparklesSharp className="text-primary" />{' '}
                  {form['reasonForApplying'].helpMeWrite}
                </Button>
              </div>
            }
            rules={{
              required: form['reasonForApplying'].required,
            }}
            textAreaProps={{
              placeholder: form['reasonForApplying'].placeholder,
              maxLength: 500,
            }}
            className="w-full"
          />
        </div>
      </div>

      {/* AI dialog */}
      <AIModel
        open={!!askAiFieldName}
        resetAiFields={resetAiFields}
        aiLoading={aiLoading}
        aiError={aiError}
        aiSuggesstion={aiSuggesstion}
        isEditing={isEditing}
        setAiSuggesstion={setAiSuggesstion}
        handleGenerateResponse={handleGenerateResponse}
        handleEdit={handleEdit}
        handleClickDiscard={handleClickDiscard}
        handleAccept={handleAccept}
      />
    </>
  );
};

export default SituationDescriptionsAiHelpForm;
