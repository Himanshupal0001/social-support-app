import { GoPerson, GoPeople, GoMail, GoChecklist } from 'react-icons/go';
import type { IconType } from 'react-icons';
import type { ReactNode } from 'react';
import PersonalInfoForm from '../forms/PersonalInfoForm';

type TStep = {
  label: string;
  icon: IconType;
  content: ReactNode;
};

export const stepperData: TStep[] = [
  {
    label: 'Personal Info',
    icon: GoPerson,
    content: <PersonalInfoForm />,
  },
  {
    label: 'Family & Financial Info',
    icon: GoPeople,
    content: <div>Family & Financial Info</div>,
  },
  {
    label: 'Describe Situation',
    icon: GoMail,
    content: <div>Describe Situation</div>,
  },
  {
    label: 'Review & Submit',
    icon: GoChecklist,
    content: <div>Review & Submit</div>,
  },
];
