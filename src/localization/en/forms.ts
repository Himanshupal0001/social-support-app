import type {
  TPersonalInformationFormTranslation,
  TFamilyAndFinancialInfoFormTranslation,
  TSituationDescriptionsFormTranslation,
  TProgressTranslation,
  TReviewStepTranslation,
  TAIModelTranslation,
  TMainFormTranslation,
  TCurrencySelectTranslation,
} from '../types/forms';

export const personalInformation: TPersonalInformationFormTranslation = {
  sectionTitle: 'Personal',
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
    required: 'Valid phone number is required',
  },
  email: {
    label: 'Email',
    required: 'Valid email is required',
  },
};

export const familyAndFinancialInfo: TFamilyAndFinancialInfoFormTranslation = {
  sectionTitle: 'Family & Financial Information',
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
  sectionTitle: 'Situation Description',
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
  editButton: 'Edit',
};

export const currencySelect: TCurrencySelectTranslation = {
  currency: 'Please select Currency',
  range: 'Please select Range',
};

// Toast messages
export const toastMessages = {
  success: {
    message: 'Application Submitted Successfully!',
    description:
      'Your social support application has been submitted. We will review it and get back to you soon.',
  },
  error: {
    message: 'Submission Failed',
    description:
      'There was an error submitting your application. Please try again later.',
  },
};

// UI Components
export const uiComponents = {
  datePicker: {
    pickDate: 'Pick a date',
  },
};

// Regions (countries, states, cities)
export const region = {
  countries: {
    uae: 'United Arab Emirates',
    saudi: 'Saudi Arabia',
    qatar: 'Qatar',
    oman: 'Oman',
  },
  states: {
    uae: {
      dubai: 'Dubai',
      abu_dhabi: 'Abu Dhabi',
    },
    saudi: {
      riyadh: 'Riyadh',
      jeddah: 'Jeddah',
    },
    qatar: {
      doha: 'Doha',
      al_rayyan: 'Al Rayyan',
    },
    oman: {
      muscat: 'Muscat',
      salalah: 'Salalah',
    },
  },
  cities: {
    uae: {
      dubai: {
        deira: 'Deira',
        jumeirah: 'Jumeirah',
        bur_dubai: 'Bur Dubai',
      },
      abu_dhabi: {
        al_ain: 'Al Ain',
        madinat_zayed: 'Madinat Zayed',
        ruwais: 'Ruwais',
      },
    },
    saudi: {
      riyadh: {
        al_malaz: 'Al Malaz',
        al_olaya: 'Al Olaya',
        al_batha: 'Al Batha',
      },
      jeddah: {
        al_balad: 'Al Balad',
        al_hamra: 'Al Hamra',
        al_safa: 'Al Safa',
      },
    },
    qatar: {
      doha: {
        al_sadd: 'Al Sadd',
        west_bay: 'West Bay',
        the_pearl: 'The Pearl',
      },
      al_rayyan: {
        al_gharrafa: 'Al Gharrafa',
        education_city: 'Education City',
        muaither: 'Muaither',
      },
    },
    oman: {
      muscat: {
        ruwi: 'Ruwi',
        muttrah: 'Muttrah',
        al_khuwair: 'Al Khuwair',
      },
      salalah: {
        al_haffa: 'Al Haffa',
        al_wadi: 'Al Wadi',
        salalah_gardens: 'Salalah Gardens',
      },
    },
  },
} as const;
