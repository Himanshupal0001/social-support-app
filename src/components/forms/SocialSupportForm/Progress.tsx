import type { IconType } from 'react-icons';
import { GoMail, GoPeople, GoPerson, GoShieldCheck } from 'react-icons/go';
import { useTranslation } from 'react-i18next';

type TStepperProps = {
  currentStep: number;
};

const Progress = ({ currentStep }: TStepperProps) => {
  const { t } = useTranslation();
  const progress = t('forms.progress', { returnObjects: true }) as {
    steps: {
      personalInfo: string;
      familyFinancialInfo: string;
      describeSituation: string;
      reviewSubmit: string;
    };
  };

  const STEPS = [
    {
      label: progress.steps.personalInfo,
      icon: GoPerson,
    },
    {
      label: progress.steps.familyFinancialInfo,
      icon: GoPeople,
    },
    {
      label: progress.steps.describeSituation,
      icon: GoMail,
    },
    {
      label: progress.steps.reviewSubmit,
      icon: GoShieldCheck,
    },
  ];
  const progressPercent =
    STEPS.length > 1 ? (currentStep / (STEPS.length - 1)) * 100 : 100;

  return (
    <div className="w-1/2 max-w-xl mx-auto">
      <div className="relative h-2 bg-secondary rounded-full">
        <div
          className="absolute left-0 top-0 h-2 bg-primary rounded-full transition-[width] duration-300 ease-in-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        {STEPS.map((step, index) => (
          <div key={index} className="flex items-center gap-2">
            <StepIndicator Icon={step.icon} isActive={index <= currentStep} />
            {currentStep === index && (
              <StepLabel label={step.label} stepNumber={index + 1} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;

const StepLabel = ({
  label,
  stepNumber,
}: {
  label: string;
  stepNumber: number;
}) => {
  const { t } = useTranslation();
  const progress = t('forms.progress', { returnObjects: true }) as {
    stepLabel: string;
  };

  return (
    <div className="md:flex md:flex-col hidden ">
      <span className="text-[13px] font-medium text-primary">
        {progress.stepLabel} {stepNumber}
      </span>
      <span className="text-[13px] font-medium">{label}</span>
    </div>
  );
};

const StepIndicator = ({
  Icon,
  isActive,
}: {
  Icon: IconType;
  isActive: boolean;
}) => {
  return (
    <div
      className={`p-3 rounded-full ${
        isActive ? 'bg-primary text-white' : 'bg-secondary'
      }`}
    >
      <Icon />
    </div>
  );
};
