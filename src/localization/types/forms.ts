export type TPersonalInformationFormTranslation = {
  sectionTitle: string;
  name: {
    label: string;
    placeholder: string;
    required: string;
    minLength: string;
    maxLength: string;
  };
  nationalId: {
    label: string;
    required: string;
    options: {
      passport: string;
      familyBook: string;
    };
  };
  dateOfBirth: {
    label: string;
    required: string;
    placeholder: string;
  };
  gender: {
    label: string;
    required: string;
    options: {
      male: string;
      female: string;
      other: string;
    };
  };
  address: {
    label: string;
    required: string;
    placeholder: string;
  };
  city: {
    label: string;
    required: string;
  };
  state: {
    label: string;
    required: string;
  };
  country: {
    label: string;
    required: string;
  };
  phoneNumber: {
    label: string;
    required: string;
  };
  email: {
    label: string;
    required: string;
  };
};

export type TFamilyAndFinancialInfoFormTranslation = {
  sectionTitle: string;
  maritalStatus: {
    label: string;
    required: string;
    options: {
      single: string;
      married: string;
      widowed: string;
      divorced: string;
      separated: string;
      other: string;
    };
  };
  dependents: {
    label: string;
    required: string;
    placeholder: string;
    max: string;
  };
  employmentStatus: {
    label: string;
    required: string;
    options: {
      employedFullTime: string;
      employedPartTime: string;
      selfEmployed: string;
      unemployed: string;
      student: string;
      retired: string;
      homemaker: string;
      other: string;
    };
  };
  monthlyIncome: {
    label: string;
    required: string;
    options: {
      none: string;
      range1: string;
      range2: string;
      range3: string;
      range4: string;
      range5: string;
    };
  };
  housingStatus: {
    label: string;
    required: string;
    options: {
      ownHome: string;
      renting: string;
      livingWithFamily: string;
      governmentHousing: string;
      temporaryShelter: string;
      homeless: string;
    };
  };
};

export type TSituationDescriptionsFormTranslation = {
  sectionTitle: string;
  financialSituation: {
    label: string;
    required: string;
    placeholder: string;
    helpMeWrite: string;
  };
  employmentCircumstances: {
    label: string;
    required: string;
    placeholder: string;
    helpMeWrite: string;
  };
  reasonForApplying: {
    label: string;
    required: string;
    placeholder: string;
    helpMeWrite: string;
  };
};

export type TProgressTranslation = {
  steps: {
    personalInfo: string;
    familyFinancialInfo: string;
    describeSituation: string;
    reviewSubmit: string;
  };
  stepLabel: string;
};

export type TReviewStepTranslation = {
  title: string;
  noValue: string;
};

export type TAIModelTranslation = {
  title: string;
  generating: string;
  generate: string;
  regenerate: string;
  discard: string;
  accept: string;
  placeholder: string;
  modelHeader: string;
};

export type TMainFormTranslation = {
  buttons: {
    previous: string;
    next: string;
    submit: string;
  };
  editButton: string;
};

export type TToastMessagesTranslation = {
  success: {
    message: string;
    description: string;
  };
  error: {
    message: string;
    description: string;
  };
};

export type TUIComponentsTranslation = {
  datePicker: {
    pickDate: string;
  };
};

export type TFormsTranslation = {
  personalInformation: TPersonalInformationFormTranslation;
  familyAndFinancialInfo: TFamilyAndFinancialInfoFormTranslation;
  situationDescriptions: TSituationDescriptionsFormTranslation;
  progress: TProgressTranslation;
  reviewStep: TReviewStepTranslation;
  aiModel: TAIModelTranslation;
  mainForm: TMainFormTranslation;
  toastMessages: TToastMessagesTranslation;
  uiComponents: TUIComponentsTranslation;
};
