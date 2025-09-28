export enum EStorageKey {
  UI_THEME = 'ui-theme',
  TRANSLATION_LANGUAGE = 'translation-language',
}
export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
  PREFER_NOT = 'prefer_not',
}

export enum MaritalStatus {
  MARRIED = 'married',
  SINGLE = 'single',
  DIVORCED = 'divorced',
  WIDOWED = 'widowed',
  PREFER_NOT = 'prefer_not',
}

export enum EmploymentStatus {
  EMPLOYED = 'employed',
  UNEMPLOYED = 'unemployed',
  SELF_EMPLOYED = 'self_employed',
  RETIRED = 'retired',
  PREFER_NOT = 'prefer_not',
}

export enum HousingStatus {
  OWNED = 'owned',
  RENTED = 'rented',
  OTHER = 'other',
  PREFER_NOT = 'prefer_not',
}

export enum ERROR_MESSAGES {
  NETWORK_ERROR = 'Network error. Please try again.',
  INVALID_CONTEXT = 'Please provide information related to your social support application.',
  CLASSIFICATION_ERROR = 'Unable to process your input. Please try again.',
  SUBMISSION_ERROR = 'There was an error submitting your application. Please try again later.',
  PARSER_ERROR = 'Failed to parse saved form data',
}
