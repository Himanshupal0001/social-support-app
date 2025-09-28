import { StorageService } from '@/services/storage-service';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { ERROR_MESSAGES } from '@/lib/enums/enum';
import {
  SECTION_KEYS,
  STORAGE_KEYS,
  TOAST_MESSAGES,
} from '@/lib/enums/social-form-enum';

export const SOCIAL_SUPPORT_FORM_TOTAL_STEPS = 4;

const STORAGE_KEY = STORAGE_KEYS.SOCIAL_SUPPORT_FORM;

const useSocialSupportForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();

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

    if (isValid) {
      const nextStep = activeStep + 1;
      setActiveStep(nextStep);

      const currentFormValues = formProps.getValues();
      const saved = StorageService.get(STORAGE_KEY);
      const parsed = saved ? JSON.parse(saved) : {};

      const validSteps = Array.isArray(parsed.validSteps)
        ? Array.from(new Set([...parsed.validSteps, activeStep]))
        : [activeStep];

      StorageService.set(
        STORAGE_KEY,
        JSON.stringify({
          ...currentFormValues,
          [STORAGE_KEYS.CURRENT_STEP]: nextStep,
          validSteps,
        })
      );
    }
  };

  const handleClickSubmit = () => formProps.handleSubmit(handleFormSubmit)();

  const handleEditSection = (section: string) => {
    const sectionToStepMap: Record<string, number> = {
      [SECTION_KEYS.PERSONAL]: 0,
      [SECTION_KEYS.FINANCIAL]: 1,
      [SECTION_KEYS.SITUATION]: 2,
    };

    const targetStep = sectionToStepMap[section];
    if (targetStep === undefined) {
      return;
    }

    setActiveStep(targetStep);

    const saved = StorageService.get(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : {};

    StorageService.set(
      STORAGE_KEY,
      JSON.stringify({
        ...parsed,
        [STORAGE_KEYS.CURRENT_STEP]: targetStep,
      })
    );
  };

  const handleFormSubmit = async () => {
    try {
      await new Promise((r) => setTimeout(r, 800));
      StorageService.remove(STORAGE_KEY);

      toast.success(t(TOAST_MESSAGES.success.messageKey), {
        description: t(TOAST_MESSAGES.success.descriptionKey),
        duration: TOAST_MESSAGES.success.duration,
      });

      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch {
      toast.error(t(TOAST_MESSAGES.error.messageKey), {
        description: t(TOAST_MESSAGES.error.descriptionKey),
        duration: TOAST_MESSAGES.error.duration,
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
        if (
          typeof parsed[STORAGE_KEYS.CURRENT_STEP] === 'number' &&
          parsed[STORAGE_KEYS.CURRENT_STEP] >= 0 &&
          parsed[STORAGE_KEYS.CURRENT_STEP] < SOCIAL_SUPPORT_FORM_TOTAL_STEPS
        ) {
          setActiveStep(parsed[STORAGE_KEYS.CURRENT_STEP]);
        }
      } catch (e) {
        console.warn(ERROR_MESSAGES.PARSER_ERROR, e);
      }
    }
  }, [reset]);

  useEffect(() => {
    const callback = subscribe({
      formState: {
        values: true,
      },
      callback: ({ values }) => {
        const formValues = {
          ...values,
          [STORAGE_KEYS.CURRENT_STEP]: activeStep,
        };
        StorageService.set(STORAGE_KEY, JSON.stringify(formValues));
      },
    });

    return () => callback();
  }, [subscribe, activeStep]);

  return {
    activeStep,
    formProps,
    handleClickPrevious,
    handleClickNext,
    handleClickSubmit,
    handleEditSection,
    isFirstStep,
    isLastStep,
  };
};

export default useSocialSupportForm;
