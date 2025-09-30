import { ERROR_MESSAGES, EStorageKey, type Gender } from '@/lib/enums/enum';
import {
  SituationFieldNames,
  AI_HELP_CONSTANTS,
  TFFIELD_NAME,
} from '@/lib/enums/social-form-enum';
import { OPENAISERVICE } from '@/services/api/open-ai';
import { StorageService } from '@/services/storage-service';
import { useRef, useState } from 'react';
import { useFormContext, type Control, useWatch } from 'react-hook-form';

export type FormData = {
  name: string;
  nationalId: string;
  dateOfBirth: string;
  gender: Gender;
  address: string;
  city: string;
  state: string;
  country: string;
  phoneNumber: string;
  email: string;
  maritalStatus: string;
  dependents: number;
  employmentStatus: string;
  monthlyIncome: number | null;
  housingStatus: string;
  financialSituation: string;
  employmentCircumstances: string;
  reasonForApplying: string;
};

type FieldNames = SituationFieldNames;

const useSituationDescriptionAiHelpForm = ({
  control,
}: {
  control: Control<FormData>;
}) => {
  const [askAiFieldName, setAskAiFieldName] = useState<FieldNames>();
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string>('');
  const [aiSuggesstion, setAiSuggesstion] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { setValue } = useFormContext();

  const SAMPLE_AI_PHRASE = useRef<string>('');

  const preferedLanguage = StorageService.get(EStorageKey.TRANSLATION_LANGUAGE);

  const fieldValues = useWatch({
    name: [
      SituationFieldNames.FINANCIAL_SITUATION,
      SituationFieldNames.EMPLOYMENT_CIRCUMSTANCES,
      SituationFieldNames.REASON_FOR_APPLYING,
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
      TFFIELD_NAME.name,
      TFFIELD_NAME.dependents,
      TFFIELD_NAME.maritalStatus,
      TFFIELD_NAME.housingStatus,
      TFFIELD_NAME.employmentStatus,
    ],
    control,
  }) as [string, number, string, string, string];

  const [name, dependents, maritalStatus, housingStatus, employmentStatus] =
    watchValues;

  const replaceTemplatePlaceholders = (
    template: string,
    replacements: Record<string, string>
  ): string => {
    return Object.entries(replacements).reduce(
      (result, [key, value]) =>
        result.replace(new RegExp(`{${key}}`, 'g'), value),
      template
    );
  };

  const getSamplePhrase = (fieldName: FieldNames) => {
    const dependentsText =
      dependents > 0 ? `${dependents} dependents` : 'family';

    const phraseMap = {
      financialSituation: AI_HELP_CONSTANTS.SAMPLE_PHRASES.FINANCIAL_SITUATION,
      employmentCircumstances:
        AI_HELP_CONSTANTS.SAMPLE_PHRASES.EMPLOYMENT_CIRCUMSTANCES,
      reasonForApplying: AI_HELP_CONSTANTS.SAMPLE_PHRASES.REASON_FOR_APPLYING,
    };

    const template =
      phraseMap[fieldName] ||
      AI_HELP_CONSTANTS.SAMPLE_PHRASES.FINANCIAL_SITUATION;

    return replaceTemplatePlaceholders(template, {
      employmentStatus: employmentStatus || 'current circumstances',
      dependentsText,
    });
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

  const handleGenerateResponse = async () => {
    if (!askAiFieldName) return;

    setAiLoading(true);
    setAiError('');

    const contextSnippet = [
      `${AI_HELP_CONSTANTS.CONTEXT_LABELS.NAME}: ${
        name || AI_HELP_CONSTANTS.CONTEXT_LABELS.UNKNOWN
      }`,
      `${AI_HELP_CONSTANTS.CONTEXT_LABELS.DEPENDENTS}: ${
        dependents || AI_HELP_CONSTANTS.CONTEXT_LABELS.UNKNOWN
      }`,
      `${AI_HELP_CONSTANTS.CONTEXT_LABELS.MARITAL_STATUS}: ${
        maritalStatus || AI_HELP_CONSTANTS.CONTEXT_LABELS.UNKNOWN
      }`,
      `${AI_HELP_CONSTANTS.CONTEXT_LABELS.HOUSING_STATUS}: ${
        housingStatus || AI_HELP_CONSTANTS.CONTEXT_LABELS.UNKNOWN
      }`,
      `${AI_HELP_CONSTANTS.CONTEXT_LABELS.EMPLOYMENT}: ${
        employmentStatus || AI_HELP_CONSTANTS.CONTEXT_LABELS.UNKNOWN
      }`,
    ].join(' | ');

    const fieldLabelMap: Record<FieldNames, string> = {
      financialSituation: AI_HELP_CONSTANTS.FIELD_LABELS.FINANCIAL_SITUATION,
      employmentCircumstances:
        AI_HELP_CONSTANTS.FIELD_LABELS.EMPLOYMENT_CIRCUMSTANCES,
      reasonForApplying: AI_HELP_CONSTANTS.FIELD_LABELS.REASON_FOR_APPLYING,
    };

    const fieldLabel = fieldLabelMap[askAiFieldName];

    const hasUserInput =
      aiSuggesstion && aiSuggesstion !== SAMPLE_AI_PHRASE.current;

    if (hasUserInput) {
      try {
        const classificationResult = await OPENAISERVICE.contextCLassifier(
          aiSuggesstion
        );
        const isContextRelated = classificationResult.choices[0].message.content
          .toLowerCase()
          .trim();

        if (isContextRelated === AI_HELP_CONSTANTS.CLASSIFICATION.FALSE_VALUE) {
          setAiLoading(false);
          setAiSuggesstion(
            AI_HELP_CONSTANTS.ERROR_MESSAGES.OFF_TOPIC_REDIRECTION
          );
          setAiError(AI_HELP_CONSTANTS.ERROR_MESSAGES.INVALID_CONTEXT);
          return;
        }

        const enhancedPrompt = replaceTemplatePlaceholders(
          AI_HELP_CONSTANTS.PROMPT_TEMPLATES.ENHANCED,
          {
            userInput: aiSuggesstion,
            fieldLabel,
            contextSnippet,
            language:
              (preferedLanguage as string) ||
              AI_HELP_CONSTANTS.DEFAULT_LANGUAGE,
            wordLimit: AI_HELP_CONSTANTS.WORD_LIMIT,
            tone: AI_HELP_CONSTANTS.TONE,
          }
        );

        const result = await OPENAISERVICE.generateText(
          enhancedPrompt,
          contextSnippet
        );
        setAiSuggesstion(result.choices[0].message.content);
        setAiLoading(false);
      } catch (error) {
        console.warn(
          AI_HELP_CONSTANTS.ERROR_MESSAGES.CLASSIFICATION_ERROR,
          error
        );

        const standardPrompt = replaceTemplatePlaceholders(
          AI_HELP_CONSTANTS.PROMPT_TEMPLATES.STANDARD,
          {
            fieldLabel,
            contextSnippet,
            language:
              (preferedLanguage as string) ||
              AI_HELP_CONSTANTS.DEFAULT_LANGUAGE,
            wordLimit: AI_HELP_CONSTANTS.WORD_LIMIT,
            tone: AI_HELP_CONSTANTS.TONE,
          }
        );

        const result = await OPENAISERVICE.generateText(
          standardPrompt,
          contextSnippet
        );
        setAiSuggesstion(result.choices[0].message.content);
        setAiLoading(false);
      }
    } else {
      const prompt = replaceTemplatePlaceholders(
        AI_HELP_CONSTANTS.PROMPT_TEMPLATES.WITH_START_PHRASE,
        {
          fieldLabel,
          contextSnippet,
          language:
            (preferedLanguage as string) || AI_HELP_CONSTANTS.DEFAULT_LANGUAGE,
          wordLimit: AI_HELP_CONSTANTS.WORD_LIMIT,
          tone: AI_HELP_CONSTANTS.TONE,
          startPhrase: AI_HELP_CONSTANTS.START_PHRASE,
        }
      );

      try {
        const result = await OPENAISERVICE.generateText(prompt, contextSnippet);
        setAiSuggesstion(result.choices[0].message.content);
        setAiLoading(false);
      } catch (error) {
        console.warn(ERROR_MESSAGES.ERROR, error);
        setAiLoading(false);
        setAiError(AI_HELP_CONSTANTS.ERROR_MESSAGES.NETWORK_ERROR);
      }
    }
  };

  const handleClickDiscard = () => {
    if (!askAiFieldName) return;
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

  return {
    askAiFieldName,
    aiLoading,
    aiError,
    aiSuggesstion,
    isEditing,
    setAiSuggesstion,
    handleHelpMeWrite,
    handleGenerateResponse,
    handleClickDiscard,
    handleEdit,
    handleAccept,
    resetAiFields,
  };
};

export default useSituationDescriptionAiHelpForm;
