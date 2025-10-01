import ControlledTextArea from '@/components/controlledUI/ControlledTextArea';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { type Control } from 'react-hook-form';
import { IoSparklesSharp } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import useSituationDescriptionAiHelpForm from './useSituationDescriptionAiHelpForm';
import { type FormData } from './useSituationDescriptionAiHelpForm';
import {
  SituationFieldNames,
  SITUATION_DESCRIPTIONS_CONSTANTS,
} from '@/lib/enums/social-form-enum';
import AIModal from '@/components/AIModal';

type TSituationDescriptionsAiHelpFormProps = {
  control: Control<FormData>;
};

const SituationDescriptionsAiHelpForm = ({
  control,
}: TSituationDescriptionsAiHelpFormProps) => {
  const {
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
  } = useSituationDescriptionAiHelpForm({ control });

  const { t } = useTranslation();
  const form = t('forms.situationDescriptions', {
    returnObjects: true,
  }) as {
    financialSituation: {
      label: string;
      helpMeWrite: string;
      required: string;
      placeholder: string;
    };
    employmentCircumstances: {
      label: string;
      helpMeWrite: string;
      required: string;
      placeholder: string;
    };
    reasonForApplying: {
      label: string;
      helpMeWrite: string;
      required: string;
      placeholder: string;
    };
  };

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
                  onClick={() =>
                    handleHelpMeWrite(SituationFieldNames.FINANCIAL_SITUATION)
                  }
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
              maxLength: SITUATION_DESCRIPTIONS_CONSTANTS.MAX_LENGTH,
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
                  onClick={() =>
                    handleHelpMeWrite(
                      SituationFieldNames.EMPLOYMENT_CIRCUMSTANCES
                    )
                  }
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
              maxLength: SITUATION_DESCRIPTIONS_CONSTANTS.MAX_LENGTH,
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
                  onClick={() =>
                    handleHelpMeWrite(SituationFieldNames.REASON_FOR_APPLYING)
                  }
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
              maxLength: SITUATION_DESCRIPTIONS_CONSTANTS.MAX_LENGTH,
            }}
            className="w-full"
          />
        </div>
      </div>

      {/* AI dialog */}
      <AIModal
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
