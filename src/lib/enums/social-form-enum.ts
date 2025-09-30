import { Gender, MaritalStatus, EmploymentStatus } from './enum';

// ============================================================================
// AI HELP FORM ENUMS
// ============================================================================

export enum SituationFieldNames {
  FINANCIAL_SITUATION = 'financialSituation',
  EMPLOYMENT_CIRCUMSTANCES = 'employmentCircumstances',
  REASON_FOR_APPLYING = 'reasonForApplying',
}

export enum ClassificationResult {
  TRUE = 'true',
  FALSE = 'false',
}

export enum AIResponseType {
  STANDARD = 'standard',
  ENHANCED = 'enhanced',
  REDIRECTION = 'redirection',
}

export enum ErrorMessages {
  NETWORK_ERROR = 'Network error. Please try again.',
  INVALID_CONTEXT = 'Please provide information related to your social support application.',
  CLASSIFICATION_ERROR = 'Unable to process your input. Please try again.',
}

export enum RedirectionMessage {
  DEFAULT = "I'm here to help you describe your situation for the social support application. Let's stay focused so we can best assist you.",
}

export enum FieldLabels {
  FINANCIAL_SITUATION = 'Current Financial Situation',
  EMPLOYMENT_CIRCUMSTANCES = 'Employment Circumstances',
  REASON_FOR_APPLYING = 'Reason for Applying',
}

// ============================================================================
// FORM NAVIGATION & STORAGE
// ============================================================================

export enum SECTION_KEYS {
  PERSONAL = 'personal',
  FINANCIAL = 'financial',
  SITUATION = 'situation',
}

export enum SECTION_TITLES {
  PERSONAL = 'Personal Information',
  FINANCIAL = 'Family & Financial Information',
  SITUATION = 'Situation Description',
}

export enum STORAGE_KEYS {
  SOCIAL_SUPPORT_FORM = 'social_support_form',
  CURRENT_STEP = 'currentStep',
}

// ============================================================================
// UI CONSTANTS
// ============================================================================

export enum UI_TEXT {
  EDIT_BUTTON_TEXT = 'Edit',
  NOT_PROVIDED_TEXT = '—',
}

export const TOAST_MESSAGES = {
  success: {
    messageKey: 'forms.toastMessages.success.message',
    descriptionKey: 'forms.toastMessages.success.description',
    duration: 6000,
  },
  error: {
    messageKey: 'forms.toastMessages.error.message',
    descriptionKey: 'forms.toastMessages.error.description',
    duration: 6000,
  },
};

// ============================================================================
// PERSONAL INFORMATION FORM
// ============================================================================

export enum TFFIELD_NAME {
  name = 'name',
  nationalId = 'nationalId',
  dateOfBirth = 'dateOfBirth',
  gender = 'gender',
  address = 'address',
  city = 'city',
  state = 'state',
  country = 'country',
  phoneNumber = 'phoneNumber',
  email = 'email',
  dependents = 'dependents',
  maritalStatus = 'maritalStatus',
  employmentStatus = 'employmentStatus',
  monthlyIncome = 'monthlyIncome',
  housingStatus = 'housingStatus',
  financialSituation = 'financialSituation',
  employmentCircumstances = 'employmentCircumstances',
  reasonForApplying = 'reasonForApplying',
}

export const GENDER_OPTIONS = {
  [Gender.MALE]: 'gender.options.male',
  [Gender.FEMALE]: 'gender.options.female',
  [Gender.OTHER]: 'gender.options.other',
} as const;

export const NATIONAL_ID_OPTIONS = {
  PASSPRT: 'nationalId.options.passport',
  FAMILY_BOOK: 'nationalId.options.familyBook',
} as const;

export const PERSONAL_INFO_CONSTANTS = {
  NAME_MIN_LENGTH: 3,
  NAME_MAX_LENGTH: 100,
  PHONE_MAX_LENGTH: 14,

  ADDRESS_MAX_LENGTH: 500,

  PHONE_PATTERN: /^\+?\d{1,3}[ ]?\d{8,10}([ ]?\d{2,4}){0,2}$/,
  DEFAULT_COUNTRY: 'AE',

  EMAIL_PATTERN: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
} as const;

// ============================================================================
// FAMILY & FINANCIAL INFORMATION FORM
// ============================================================================

export const MARITAL_STATUS_OPTIONS = {
  [MaritalStatus.SINGLE]: 'maritalStatus.options.single',
  [MaritalStatus.MARRIED]: 'maritalStatus.options.married',
  [MaritalStatus.WIDOWED]: 'maritalStatus.options.widowed',
  [MaritalStatus.DIVORCED]: 'maritalStatus.options.divorced',
  SEPARATED: 'maritalStatus.options.separated',
  OTHER: 'maritalStatus.options.other',
} as const;

export const EMPLOYMENT_STATUS_OPTIONS = {
  EMPLOYED_FULL_TIME: 'employmentStatus.options.employedFullTime',
  EMPLOYED_PART_TIME: 'employmentStatus.options.employedPartTime',
  [EmploymentStatus.SELF_EMPLOYED]: 'employmentStatus.options.selfEmployed',
  [EmploymentStatus.UNEMPLOYED]: 'employmentStatus.options.unemployed',
  STUDENT: 'employmentStatus.options.student',
  [EmploymentStatus.RETIRED]: 'employmentStatus.options.retired',
  HOMEMAKER: 'employmentStatus.options.homemaker',
  OTHER: 'employmentStatus.options.other',
} as const;

export const MONTHLY_INCOME_OPTIONS = {
  'monthlyIncome.options.none': 'monthlyIncome.options.none',
  'monthlyIncome.options.range1': 'monthlyIncome.options.range1',
  'monthlyIncome.options.range2': 'monthlyIncome.options.range2',
  'monthlyIncome.options.range3': 'monthlyIncome.options.range3',
  'monthlyIncome.options.range4': 'monthlyIncome.options.range4',
  'monthlyIncome.options.range5': 'monthlyIncome.options.range5',
} as const;

export const HOUSING_STATUS_OPTIONS = {
  OWN_HOME: 'housingStatus.options.ownHome',
  RENTING: 'housingStatus.options.renting',
  LIVING_WITH_FAMILY: 'housingStatus.options.livingWithFamily',
  GOVERNMENT_HOUSING: 'housingStatus.options.governmentHousing',
  TEMPORARY_SHELTER: 'housingStatus.options.temporaryShelter',
  HOMELESS: 'housingStatus.options.homeless',
} as const;

export const FAMILY_FINANCIAL_CONSTANTS = {
  DEPENDENTS_MAX: 10,

  DEFAULT_CURRENCY: 'AED',
  CURRENCY_VARIANT: 'small' as const,
} as const;

// ============================================================================
// SITUATION DESCRIPTIONS FORM
// ============================================================================

export const SITUATION_DESCRIPTIONS_CONSTANTS = {
  MAX_LENGTH: 500,

  HELP_ME_WRITE: 'Help me write',
} as const;

// ============================================================================
// AI HELP CONSTANTS
// ============================================================================

export const AI_HELP_CONSTANTS = {
  WORD_LIMIT: '60-180 words',
  TONE: 'respectful, and professional',
  START_PHRASE: 'I am currently...',

  DEFAULT_LANGUAGE: 'English',

  CLASSIFICATION: {
    FALSE_VALUE: 'false',
    LOG_MESSAGE: 'Classification error:',
  },

  CONTEXT_LABELS: {
    NAME: 'Name',
    DEPENDENTS: 'Dependents',
    MARITAL_STATUS: 'Marital Status',
    HOUSING_STATUS: 'Housing Status',
    EMPLOYMENT: 'Employment',
    UNKNOWN: '(unknown)',
  },

  FIELD_LABELS: {
    FINANCIAL_SITUATION: 'Current Financial Situation',
    EMPLOYMENT_CIRCUMSTANCES: 'Employment Circumstances',
    REASON_FOR_APPLYING: 'Reason for Applying',
  },

  ERROR_MESSAGES: {
    OFF_TOPIC_REDIRECTION: `I'm here to help you describe your situation for the social support application. Let's stay focused so we can best assist you.`,
    INVALID_CONTEXT: 'errors.invalidContext',
    NETWORK_ERROR: 'errors.networkError',
    CLASSIFICATION_ERROR: 'errors.classificationError',
  },

  PROMPT_TEMPLATES: {
    ENHANCED:
      'Based on this situation: "{userInput}", help write a clear, empathetic paragraph for: {fieldLabel} with the following context: {contextSnippet} according to user\'s prefered language: {language}. Keep it between {wordLimit}, {tone}. Focus on the user\'s specific situation and make it relevant to their social support application.',
    STANDARD:
      "Write a clear, empathetic paragraph for: {fieldLabel} with the following context: {contextSnippet} according to user's prefered language: {language}. Keep it between {wordLimit}, {tone}.",
    WITH_START_PHRASE:
      'Write a clear, empathetic paragraph for: {fieldLabel} with the following context: {contextSnippet} according to user\'s prefered language: {language}. Keep it between {wordLimit}, {tone}. Start with "{startPhrase}" if appropriate.',
  },

  SAMPLE_PHRASES: {
    FINANCIAL_SITUATION:
      'I am currently facing financial challenges due to {employmentStatus}. This has impacted my ability to meet essential expenses including housing, utilities, and daily necessities. I am seeking support through this program to help stabilize my financial situation while I work towards long-term stability.',
    EMPLOYMENT_CIRCUMSTANCES:
      "My employment circumstances have been affected by {employmentStatus}. This situation has created financial instability and challenges in meeting my family's needs. I am applying for support to help bridge this difficult period while I work towards more stable employment.",
    REASON_FOR_APPLYING:
      'I am applying for social support because my current situation with {employmentStatus} has made it difficult to provide for my {dependentsText}. The support would help me maintain stability while working towards long-term financial independence.',
  },
} as const;

// ============================================================================
// REVIEW STEP CONSTANTS
// ============================================================================

export const REVIEW_STEP_CONSTANTS = {
  SECTION_TITLE_KEYS: {
    [SECTION_KEYS.PERSONAL]: 'forms.personalInformation.sectionTitle',
    [SECTION_KEYS.FINANCIAL]: 'forms.familyAndFinancialInfo.sectionTitle',
    [SECTION_KEYS.SITUATION]: 'forms.situationDescriptions.sectionTitle',
  },

  FIELD_LABEL_KEYS: {
    name: 'forms.personalInformation.name.label',
    nationalId: 'forms.personalInformation.nationalId.label',
    dateOfBirth: 'forms.personalInformation.dateOfBirth.label',
    gender: 'forms.personalInformation.gender.label',
    address: 'forms.personalInformation.address.label',
    city: 'forms.personalInformation.city.label',
    state: 'forms.personalInformation.state.label',
    country: 'forms.personalInformation.country.label',
    phoneNumber: 'forms.personalInformation.phoneNumber.label',
    email: 'forms.personalInformation.email.label',

    maritalStatus: 'forms.familyAndFinancialInfo.maritalStatus.label',
    dependents: 'forms.familyAndFinancialInfo.dependents.label',
    employmentStatus: 'forms.familyAndFinancialInfo.employmentStatus.label',
    monthlyIncome: 'forms.familyAndFinancialInfo.monthlyIncome.label',
    housingStatus: 'forms.familyAndFinancialInfo.housingStatus.label',

    financialSituation: 'forms.situationDescriptions.financialSituation.label',
    employmentCircumstances:
      'forms.situationDescriptions.employmentCircumstances.label',
    reasonForApplying: 'forms.situationDescriptions.reasonForApplying.label',
  },

  VALUE_FORMATTING: {
    CURRENCY_SEPARATOR: ' ',
    EMPTY_VALUE: '—',
    DEPENDENTS_PLURAL: 'dependents',
    DEPENDENTS_SINGULAR: 'dependent',
  },

  STYLING: {
    SECTION_CONTAINER:
      'relative bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden',
    SECTION_HEADER:
      'bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700',
    SECTION_CONTENT: 'p-4 sm:p-6',
    FIELD_GRID: 'grid grid-cols-1 sm:grid-cols-2 gap-3',
    FIELD_CONTAINER: 'rounded-lg border p-3 bg-background/50',
    FIELD_LABEL: 'text-xs text-muted-foreground',
    FIELD_VALUE: 'mt-1 text-sm break-words',
    ICON_CONTAINER: 'p-1.5 sm:p-2 bg-primary/10 rounded-lg',
    EDIT_BUTTON: 'h-8 px-3 text-xs sm:h-9 sm:px-4 sm:text-sm',
  },

  UI_TEXT_KEYS: {
    EDIT_BUTTON: 'forms.mainForm.editButton',
  },
} as const;

// ============================================================================
// FIELD GROUPS
// ============================================================================

export const FIELD_GROUPS = {
  PERSONAL_FIELDS: [
    'name',
    'nationalId',
    'dateOfBirth',
    'gender',
    'address',
    'city',
    'state',
    'country',
    'phoneNumber',
    'email',
  ] as const,
  FINANCIAL_FIELDS: [
    'maritalStatus',
    'dependents',
    'employmentStatus',
    'monthlyIncome',
    'housingStatus',
  ] as const,
  SITUATION_FIELDS: [
    'financialSituation',
    'employmentCircumstances',
    'reasonForApplying',
  ] as const,
} as const;
