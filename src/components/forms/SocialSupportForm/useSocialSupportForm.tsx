import { StorageService } from '@/services/storage-service';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

type FormData = {
  // Step 1: Personal Information
  name: string;
  nationalId: string;
  dateOfBirth: string; // yyyy-mm-dd
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

export const SOCIAL_SUPPORT_FORM_TOTAL_STEPS = 4;

const STORAGE_KEY = 'social_support_form';

const useSocialSupportForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const formProps = useForm<FormData>();
  const { reset, subscribe } = formProps;

  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === SOCIAL_SUPPORT_FORM_TOTAL_STEPS - 1;

  const handleClickPrevious = () => {
    if (isFirstStep) return;
    setActiveStep((previousValue) => previousValue - 1);
  };

  const handleClickNext = async () => {
    if (isLastStep) return;

    let isValid = false;
    await formProps.handleSubmit(() => (isValid = true))();

    if (isValid) setActiveStep((previousValue) => previousValue + 1);
  };

  const handleClickSubmit = () => formProps.handleSubmit(handleFormSubmit)();

  const handleFormSubmit = async (formValues: FormData) => {
    // Mock API call
    try {
      await new Promise((r) => setTimeout(r, 800));
      // Clear saved storage on success
      StorageService.remove(STORAGE_KEY);

      // Show success toast
      toast.success('Application Submitted Successfully!', {
        description:
          'Your social support application has been submitted. We will review it and get back to you soon.',
        duration: 6000,
      });

      // Navigate to home page after a short delay
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch {
      // Show error toast
      toast.error('Submission Failed', {
        description:
          'There was an error submitting your application. Please try again later.',
        duration: 6000,
      });
    }
  };

  // Load saved progress
  useEffect(() => {
    const raw = StorageService.get(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);

        reset({
          ...parsed,
          dateOfBirth: parsed.dateOfBirth
            ? new Date(parsed.dateOfBirth)
            : undefined,
        });
      } catch (e) {
        console.warn('Failed to parse saved form data', e);
      }
    }
  }, [reset]);

  useEffect(() => {
    const callback = subscribe({
      formState: {
        values: true,
      },
      callback: ({ values }) => {
        StorageService.set(STORAGE_KEY, JSON.stringify(values));
      },
    });

    return () => callback();
  }, [subscribe]);

  return {
    activeStep,
    formProps,
    handleClickPrevious,
    handleClickNext,
    handleClickSubmit,
    isFirstStep,
    isLastStep,
  };
};

export default useSocialSupportForm;
