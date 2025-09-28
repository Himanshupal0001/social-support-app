import { Button } from '@/components/ui/button';
import FamilyAndFinancialInfoForm from './FamilyAndFinancialInfoForm';
import PersonalInformationForm from './PersonalInformationForm';
import SituationDescriptionsAiHelpForm from './SituationDescriptionsAiHelpForm';
import useSocialSupportForm from './useSocialSupportForm';
import { cn } from '@/lib/utils';
import { Form } from '@/components/ui/form';
import Progress from './Progress';
import ReviewStep from './ReviewStep';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const SocialSupportForm = () => {
  const {
    activeStep,
    formProps,
    handleClickPrevious,
    handleClickNext,
    handleClickSubmit,
    handleEditSection,
    isFirstStep,
    isLastStep,
  } = useSocialSupportForm();

  const { control } = formProps;
  const { t } = useTranslation();
  const buttons = t('forms.mainForm.buttons', {
    returnObjects: true,
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [activeStep]);

  return (
    <>
      <div className="mb-8">
        <Progress currentStep={activeStep} />
      </div>

      <Form {...formProps}>
        {activeStep === 0 && (
          <PersonalInformationForm key={0} control={control} />
        )}
        {activeStep === 1 && (
          <FamilyAndFinancialInfoForm key={1} control={control} />
        )}
        {activeStep === 2 && (
          <SituationDescriptionsAiHelpForm key={2} control={control} />
        )}
        {activeStep === 3 && (
          <ReviewStep
            key={3}
            values={formProps.getValues?.() ?? {}}
            onEdit={handleEditSection}
          />
        )}
      </Form>

      <div className="flex items-center justify-end p-4 gap-2">
        <Button
          variant="outline"
          className={cn({ hidden: isFirstStep })}
          onClick={handleClickPrevious}
        >
          {buttons.previous}
        </Button>

        <Button onClick={isLastStep ? handleClickSubmit : handleClickNext}>
          {isLastStep ? buttons.submit : buttons.next}
        </Button>
      </div>
    </>
  );
};

export default SocialSupportForm;
