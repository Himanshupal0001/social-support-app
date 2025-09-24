import React, { useState } from 'react';
import Stepper from './Stepper';
import type { TSteps } from '../../types/stepper';
import { Button } from '@/components/ui/button';

const BUTTN_LABELS = {
  BACK: 'Back',
  NEXT: 'Next',
  SUBMIT: 'Submit',
};

const StepperContainer = ({ steps }: { steps: TSteps[] }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;
  const handleNext = () => {
    if (isLastStep) {
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const handleBack = () => {
    if (isFirstStep) {
      return;
    }
    setCurrentStep(currentStep - 1);
  };
  return (
    <div className="px-20">
      <Stepper steps={steps} currentStep={currentStep} />

      <div>{steps[currentStep].content}</div>

      <div className=" flex items-center justify-end p-4 gap-4">
        <Button onClick={handleBack}>{BUTTN_LABELS.BACK}</Button>
        <Button onClick={handleNext}>{BUTTN_LABELS.NEXT}</Button>
      </div>
    </div>
  );
};

export default StepperContainer;
