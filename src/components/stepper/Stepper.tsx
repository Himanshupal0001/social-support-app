import React from 'react';
import type { IconType } from 'react-icons';
import type { TSteps } from '../../types/stepper';

type TStepperProps = {
  steps: TSteps[];
  currentStep: number;
};

const Stepper = ({ steps, currentStep }: TStepperProps) => {
  const progressPercent =
    steps.length > 1 ? (currentStep / (steps.length - 1)) * 100 : 100;

  return (
    <div className="w-1/2 max-w-xl mx-auto">
      {/* Progress track */}
      <div className="relative h-2 bg-secondary rounded-full">
        <div
          className="absolute left-0 top-0 h-2 bg-primary rounded-full transition-[width] duration-300 ease-in-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Step indicators and labels */}
      <div className="mt-4 flex items-center justify-between">
        {steps.map((step, index) => (
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

export default Stepper;

const StepLabel = ({
  label,
  stepNumber,
}: {
  label: string;
  stepNumber: number;
}) => {
  return (
    <div className="md:flex md:flex-col hidden ">
      <span className="text-[13px] font-medium text-primary">
        STEP {stepNumber}
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
