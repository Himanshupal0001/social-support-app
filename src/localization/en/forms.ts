import type {
  TPersonalInformationFormTranslation,
  TFamilyAndFinancialInfoFormTranslation,
  TSituationDescriptionsFormTranslation,
  TProgressTranslation,
  TReviewStepTranslation,
  TAIModelTranslation,
  TMainFormTranslation,
} from '../types/forms';

export const personalInformation: TPersonalInformationFormTranslation = {
  name: {
    label: 'Name',
    placeholder: 'Enter your full name',
    required: 'Please enter your full name',
    minLength: 'Please enter minimum 3 characters',
    maxLength: 'Max 100 Characters allowed',
  },
  nationalId: {
    label: 'National ID',
    required: 'National ID is required',
    options: {
      passport: 'Passport',
      familyBook: 'Family Book',
    },
  },
  dateOfBirth: {
    label: 'Date of Birth',
    required: 'Date of Birth is required',
    placeholder: 'Pick a date',
  },
  gender: {
    label: 'Gender',
    required: 'Gender is required',
    options: {
      male: 'Male',
      female: 'Female',
      other: 'Other',
    },
  },
  address: {
    label: 'Address',
    required: 'Address is required',
    placeholder: 'Enter your address',
  },
  city: {
    label: 'City',
    required: 'Please select City',
  },
  state: {
    label: 'State',
    required: 'Please select State',
  },
  country: {
    label: 'Country',
    required: 'Please select Country',
  },
  phoneNumber: {
    label: 'Phone Number',
    required: 'Phone Number is required',
  },
  email: {
    label: 'Email',
    required: 'Email is required',
  },
};

export const familyAndFinancialInfo: TFamilyAndFinancialInfoFormTranslation = {
  maritalStatus: {
    label: 'Marital Status',
    required: 'Marital Status is required',
    options: {
      single: 'Single',
      married: 'Married',
      widowed: 'Widowed',
      divorced: 'Divorced',
      separated: 'Separated',
      other: 'Other',
    },
  },
  dependents: {
    label: 'Dependents',
    required: 'Please enter no. of dependents',
    placeholder: 'Enter no. of dependents',
    max: 'Maximum 10 dependents allowed',
  },
  employmentStatus: {
    label: 'Employment Status',
    required: 'Employment Status is required',
    options: {
      employedFullTime: 'Employed - Full Time',
      employedPartTime: 'Employed - Part Time',
      selfEmployed: 'Self-Employed',
      unemployed: 'Unemployed',
      student: 'Student',
      retired: 'Retired',
      homemaker: 'Homemaker',
      other: 'Other',
    },
  },
  monthlyIncome: {
    label: 'Monthly Income',
    required: 'Monthly Income is required',
    options: {
      none: 'No Income',
      range1: '0 – 1,000',
      range2: '1,001 – 3,000',
      range3: '3,001 – 5,000',
      range4: '5,001 – 10,000',
      range5: '10,001+',
    },
  },
  housingStatus: {
    label: 'Housing Status',
    required: 'Housing Status is required',
    options: {
      ownHome: 'Own Home',
      renting: 'Renting',
      livingWithFamily: 'Living with Family',
      governmentHousing: 'Government Housing',
      temporaryShelter: 'Temporary Shelter',
      homeless: 'Homeless',
    },
  },
};

export const situationDescriptions: TSituationDescriptionsFormTranslation = {
  financialSituation: {
    label: 'Current Financial Situation',
    required: 'Financial situation description is required',
    placeholder: 'Describe your current financial situation...',
    helpMeWrite: 'Help me write',
  },
  employmentCircumstances: {
    label: 'Employment Circumstances',
    required: 'Employment circumstances description is required',
    placeholder: 'Describe your employment circumstances...',
    helpMeWrite: 'Help me write',
  },
  reasonForApplying: {
    label: 'Reason for Applying',
    required: 'Reason for applying is required',
    placeholder: 'Explain why you are applying for social support...',
    helpMeWrite: 'Help me write',
  },
};

export const progress: TProgressTranslation = {
  steps: {
    personalInfo: 'Personal Info',
    familyFinancialInfo: 'Family & Financial Info',
    describeSituation: 'Describe Situation',
    reviewSubmit: 'Review & Submit',
  },
  stepLabel: 'STEP',
};

export const reviewStep: TReviewStepTranslation = {
  title: 'Review Your Information',
  noValue: '—',
};

export const aiModel: TAIModelTranslation = {
  title: 'AI Writing Assistant',
  generating: 'Generating suggestion...',
  generate: 'Generate',
  regenerate: 'Regenerate',
  discard: 'Discard',
  accept: 'Accept & Use',
  placeholder:
    'Type your text here or use the Generate button to create AI content...',
  modelHeader: 'AI Writing Assistant',
};

export const mainForm: TMainFormTranslation = {
  buttons: {
    previous: 'Previous',
    next: 'Next',
    submit: 'Submit',
  },
};
