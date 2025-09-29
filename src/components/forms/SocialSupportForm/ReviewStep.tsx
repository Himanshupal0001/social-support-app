import { formatToSimpleDate } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { Edit3, User, Home, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  SECTION_KEYS,
  SECTION_TITLES,
  FIELD_GROUPS,
  REVIEW_STEP_CONSTANTS,
  GENDER_OPTIONS,
  NATIONAL_ID_OPTIONS,
  MARITAL_STATUS_OPTIONS,
  EMPLOYMENT_STATUS_OPTIONS,
  MONTHLY_INCOME_OPTIONS,
  HOUSING_STATUS_OPTIONS,
} from '@/lib/enums/social-form-enum';

type Props = {
  values: FormData;
  onEdit?: (section: string) => void;
};

const getFieldLabel = (key: string, t: (key: string) => string) => {
  const labelKey =
    REVIEW_STEP_CONSTANTS.FIELD_LABEL_KEYS[
      key as keyof typeof REVIEW_STEP_CONSTANTS.FIELD_LABEL_KEYS
    ];

  if (labelKey) {
    return t(labelKey);
  }

  // Fallback to pretty label if no translation key exists
  return key
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

const getSectionTitle = (sectionKey: string, t: (key: string) => string) => {
  const titleKey =
    REVIEW_STEP_CONSTANTS.SECTION_TITLE_KEYS[
      sectionKey as keyof typeof REVIEW_STEP_CONSTANTS.SECTION_TITLE_KEYS
    ];

  if (titleKey) {
    return t(titleKey);
  }

  // Fallback to SECTION_TITLES if no translation key exists
  return (
    SECTION_TITLES[sectionKey as keyof typeof SECTION_TITLES] || sectionKey
  );
};

export default function ReviewStep({ values, onEdit }: Props) {
  const { t } = useTranslation();
  // Capture region raw values for nested translation lookups
  const countryRaw = (values as any)?.country as string | undefined;
  const stateRaw = (values as any)?.state as string | undefined;
  const formattedValues = formatValues(
    values as unknown as Record<string, unknown>,
    t,
    countryRaw,
    stateRaw
  );
  const entries = Object.entries(formattedValues ?? {}) as [string, string][];
  const sections = groupFieldsBySection(entries);

  return (
    <div className="space-y-6">
      {sections.map(([sectionKey, section]) => {
        const IconComponent = section.icon;

        return (
          <div
            key={sectionKey}
            className="relative bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
          >
            <div className="bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
                    {getSectionTitle(sectionKey, t)}
                  </h3>
                </div>

                {onEdit && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(sectionKey)}
                    className="h-8 px-3 text-xs sm:h-9 sm:px-4 sm:text-sm"
                  >
                    <Edit3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5" />
                    <span className="hidden sm:inline">
                      {t(REVIEW_STEP_CONSTANTS.UI_TEXT_KEYS.EDIT_BUTTON)}
                    </span>
                  </Button>
                )}
              </div>
            </div>

            {/* Section Content */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {section.fields.map(([key, value]) => {
                  // const isOdd = section.fields.length % 2 !== 0;
                  // const isLast = index === section.fields.length - 1;
                  // const shouldSpanFull = isOdd && isLast;
                  return (
                    <div
                      key={key}
                      // className={cn(
                      //   'rounded-lg border p-3 bg-background/50',
                      //   shouldSpanFull && 'sm:col-span-2'
                      // )}
                      className="rounded-lg border p-3 bg-background/50"
                    >
                      <div className="text-xs text-muted-foreground">
                        {getFieldLabel(key, t)}
                      </div>
                      <div className="mt-1 text-sm break-words">
                        {value === null || value === undefined || value === ''
                          ? REVIEW_STEP_CONSTANTS.VALUE_FORMATTING.EMPTY_VALUE
                          : String(value)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const translateEnumValue = (
  fieldName: string,
  value: string,
  t: (key: string) => string,
  countryRaw?: string,
  stateRaw?: string
): string => {
  const enumMappings: Record<string, Record<string, string>> = {
    gender: GENDER_OPTIONS,
    nationalId: NATIONAL_ID_OPTIONS,
    maritalStatus: MARITAL_STATUS_OPTIONS,
    employmentStatus: EMPLOYMENT_STATUS_OPTIONS,
    monthlyIncome: MONTHLY_INCOME_OPTIONS,
    housingStatus: HOUSING_STATUS_OPTIONS,
  };

  const fieldMapping = enumMappings[fieldName];
  if (fieldMapping && fieldMapping[value]) {
    const personalInfoKey = `forms.personalInformation.${fieldMapping[value]}`;
    const personalInfoTranslation = t(personalInfoKey);
    if (personalInfoTranslation !== personalInfoKey) {
      return personalInfoTranslation;
    }

    const familyInfoKey = `forms.familyAndFinancialInfo.${fieldMapping[value]}`;
    const familyInfoTranslation = t(familyInfoKey);
    if (familyInfoTranslation !== familyInfoKey) {
      return familyInfoTranslation;
    }
  }

  // Region fields translations (countries, states, cities)
  if (fieldName === 'country') {
    const key = `forms.region.countries.${value}`;
    const translated = t(key);
    if (translated !== key) return translated;
  }

  if (fieldName === 'state' && countryRaw) {
    const key = `forms.region.states.${countryRaw}.${value}`;
    const translated = t(key);
    if (translated !== key) return translated;
  }

  if (fieldName === 'city' && countryRaw && stateRaw) {
    const key = `forms.region.cities.${countryRaw}.${stateRaw}.${value}`;
    const translated = t(key);
    if (translated !== key) return translated;
  }

  return value;
};

const formatValues = (
  values: Record<string, unknown>,
  t: (key: string) => string,
  countryRaw?: string,
  stateRaw?: string
) => {
  const formattedValues: Record<string, unknown> = { ...values };

  if (values['dateOfBirth']) {
    formattedValues['dateOfBirth'] = formatToSimpleDate(
      values['dateOfBirth'] as string | Date
    );
  }

  if ((values['monthlyIncome'] as Record<string, unknown>)?.['range']) {
    const monthlyIncome = values['monthlyIncome'] as Record<string, unknown>;
    formattedValues[
      'monthlyIncome'
    ] = `${monthlyIncome['currency']}${REVIEW_STEP_CONSTANTS.VALUE_FORMATTING.CURRENCY_SEPARATOR}${monthlyIncome['range']}`;
  }

  const enumFields = [
    'gender',
    'nationalId',
    'maritalStatus',
    'employmentStatus',
    'housingStatus',
    'country',
    'state',
    'city',
  ];
  enumFields.forEach((fieldName) => {
    if (values[fieldName] && typeof values[fieldName] === 'string') {
      formattedValues[fieldName] = translateEnumValue(
        fieldName,
        values[fieldName] as string,
        t,
        countryRaw,
        stateRaw
      );
    }
  });

  return formattedValues;
};

const groupFieldsBySection = (entries: [string, string][]) => {
  const sections = {
    [SECTION_KEYS.PERSONAL]: {
      icon: User,
      fields: entries.filter(([key]) =>
        (FIELD_GROUPS.PERSONAL_FIELDS as readonly string[]).includes(key)
      ),
    },
    [SECTION_KEYS.FINANCIAL]: {
      icon: Home,
      fields: entries.filter(([key]) =>
        (FIELD_GROUPS.FINANCIAL_FIELDS as readonly string[]).includes(key)
      ),
    },
    [SECTION_KEYS.SITUATION]: {
      icon: FileText,
      fields: entries.filter(([key]) =>
        (FIELD_GROUPS.SITUATION_FIELDS as readonly string[]).includes(key)
      ),
    },
  };

  return Object.entries(sections).filter(
    ([, section]) => section.fields.length > 0
  );
};
