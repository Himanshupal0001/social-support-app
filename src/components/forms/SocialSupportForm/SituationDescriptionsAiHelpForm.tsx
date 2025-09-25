import ControlledTextArea from '@/components/controlledUI/ControlledTextArea';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { useWatch, type Control, type UseFormSetValue } from 'react-hook-form';
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
  setValue: UseFormSetValue<FormData>;
};

type FieldNames =
  | 'financialSituation'
  | 'employmentCircumstances'
  | 'reasonForApplying';

const SituationDescriptionsAiHelpForm = ({
  control,
  setValue,
}: TSituationDescriptionsAiHelpFormProps) => {
  const [askAiFieldName, setAskAiFieldName] = useState<FieldNames>();
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const [aiSuggesstion, setAiSuggesstion] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const { t } = useTranslation();
  const form = t('forms.situationDescriptions', { returnObjects: true }) as any;

  // Watch all form fields using a more elegant approach
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

  //for ai context
  const name = useWatch({ name: 'name', control });
  const employmentStatus = useWatch({ name: 'employmentStatus', control });
  const dependents = useWatch({ name: 'dependents', control });
  const maritalStatus = useWatch({ name: 'maritalStatus', control });
  const housingStatus = useWatch({ name: 'housingStatus', control });

  // Create a lookup object for cleaner field value access
  const fieldValueMap: Record<FieldNames, string> = {
    financialSituation: financialSituation || '',
    employmentCircumstances: employmentCircumstances || '',
    reasonForApplying: reasonForApplying || '',
  };

  const getCurrentFieldValue = (fieldName: FieldNames): string => {
    return fieldValueMap[fieldName];
  };

  let SAMPLE_AI_PHRASE = '';

  const handleHelpMeWrite = (fieldName: FieldNames) => {
    // Get current textarea value
    const currentValue = getCurrentFieldValue(fieldName);
    const hasExistingText = currentValue && currentValue.trim().length > 0;

    SAMPLE_AI_PHRASE = `I am currently facing ${fieldName} challenges due to ${employmentStatus}. This has impacted my ability to meet essential expenses including housing,utilities, and daily necessities. I am seeking support through this program to help stabilize my financial situation while I work towards long-term stability.`;

    // Open dialog and set up initial state
    setAskAiFieldName(fieldName);
    setAiLoading(false);
    setAiError('');
    setIsEditing(false); // Start in read-only mode

    // Set initial content based on whether textarea has content
    if (hasExistingText) {
      // Show existing text for editing
      setAiSuggesstion(currentValue);
    } else {
      // Show default prompt for empty textarea
      setAiSuggesstion(SAMPLE_AI_PHRASE);
    }
  };

  const handleGenerateResponse = async () => {
    if (!askAiFieldName) return;

    setAiLoading(true);
    setAiError('');

    // Prepare context for AI
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
      aiSuggesstion && aiSuggesstion !== SAMPLE_AI_PHRASE
        ? `Based on this context: "${aiSuggesstion}", write a clear, empathetic paragraph for: ${fieldLabel} with the following context: ${contextSnippet}. Keep it between 60-180 words, respectful, and professional.`
        : prompt;

    try {
      const result = await OPENAISERVICE.generateText(
        userPrompt,
        contextSnippet
      );
      setAiSuggesstion(result.choices[0].message.content);
      setAiLoading(false);
    } catch {
      setAiLoading(false);
      setAiError('Network error. Please try again.');
    }
  };

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

  //trigger api call on model open
  useEffect(() => {
    if (askAiFieldName) {
      handleGenerateResponse();
    }
  }, [askAiFieldName]);

  return (
    <>
      <div className="space-y-4">
        <div className="flex-1">
          <ControlledTextArea
            name="financialSituation"
            control={control}
            label={form.financialSituation.label}
            renderExtraLabel={
              <div className="flex flex-1 flex-row justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleHelpMeWrite('financialSituation')}
                >
                  <IoSparklesSharp className="text-primary" />{' '}
                  {form.financialSituation.helpMeWrite}
                </Button>
              </div>
            }
            rules={{
              required: form.financialSituation.required,
            }}
            textAreaProps={{
              placeholder: form.financialSituation.placeholder,
              maxLength: 500,
            }}
            className="w-full"
          />
        </div>

        <div className="flex-1">
          <ControlledTextArea
            name="employmentCircumstances"
            control={control}
            label={form.employmentCircumstances.label}
            renderExtraLabel={
              <div className="flex flex-1 flex-row justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleHelpMeWrite('employmentCircumstances')}
                >
                  <IoSparklesSharp className="text-primary" />{' '}
                  {form.employmentCircumstances.helpMeWrite}
                </Button>
              </div>
            }
            rules={{
              required: form.employmentCircumstances.required,
            }}
            textAreaProps={{
              placeholder: form.employmentCircumstances.placeholder,
              maxLength: 500,
            }}
            className="w-full"
          />
        </div>

        <div className="flex-1">
          <ControlledTextArea
            name="reasonForApplying"
            control={control}
            label={form.reasonForApplying.label}
            renderExtraLabel={
              <div className="flex flex-1 flex-row justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleHelpMeWrite('reasonForApplying')}
                >
                  <IoSparklesSharp className="text-primary" />{' '}
                  {form.reasonForApplying.helpMeWrite}
                </Button>
              </div>
            }
            rules={{
              required: form.reasonForApplying.required,
            }}
            textAreaProps={{
              placeholder: form.reasonForApplying.placeholder,
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
