import ControlledCurrencySelect from '@/components/controlledUI/ControlledCurrencySelect';
import ControlledInput from '@/components/controlledUI/ControlledInput';
import ControlledSelect from '@/components/controlledUI/ControlledSelect';
import { type Control, type FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  MARITAL_STATUS_OPTIONS,
  EMPLOYMENT_STATUS_OPTIONS,
  MONTHLY_INCOME_OPTIONS,
  HOUSING_STATUS_OPTIONS,
  FAMILY_FINANCIAL_CONSTANTS,
} from '@/lib/enums/social-form-enum';
import type { TFamilyAndFinancialInfoFormTranslation } from '@/localization/types/forms';

type Props = {
  control: Control<FieldValues>;
};

const FamilyAndFinancialInfoForm = ({ control }: Props) => {
  const { t } = useTranslation();
  const form = t('forms.familyAndFinancialInfo', {
    returnObjects: true,
  }) as TFamilyAndFinancialInfoFormTranslation;
  console.log('familyform', form);

  return (
    <div className="md:grid md:grid-cols-2 md:gap-4 space-y-4">
      <ControlledSelect
        name="maritalStatus"
        control={control}
        label={form.maritalStatus.label}
        rules={{
          required: form.maritalStatus.required,
        }}
        className="w-full"
        autoFocus={true}
        selectProps={{
          options: Object.entries(MARITAL_STATUS_OPTIONS).map(
            ([value, labelKey]) => ({
              value,
              label: t(`forms.familyAndFinancialInfo.${labelKey}`),
            })
          ),
        }}
      />

      <ControlledInput
        type="number"
        name="dependents"
        control={control}
        label={form.dependents.label}
        rules={{
          required: { value: true, message: form.dependents.required },
          max: {
            value: FAMILY_FINANCIAL_CONSTANTS.DEPENDENTS_MAX,
            message: form.dependents.max,
          },
        }}
        placeholder={form.dependents.placeholder}
      />

      <ControlledSelect
        name="employmentStatus"
        control={control}
        label={form.employmentStatus.label}
        rules={{
          required: {
            value: true,
            message: form.employmentStatus.required,
          },
        }}
        className="w-full"
        selectProps={{
          options: Object.entries(EMPLOYMENT_STATUS_OPTIONS).map(
            ([value, labelKey]) => ({
              value,
              label: t(`forms.familyAndFinancialInfo.${labelKey}`),
            })
          ),
        }}
      />

      <ControlledCurrencySelect
        control={control}
        currencies="all"
        variant={FAMILY_FINANCIAL_CONSTANTS.CURRENCY_VARIANT}
        defaultCurrency={'cuurency'}
        rules={{
          required: { value: true, message: form.monthlyIncome.required },
        }}
        selectInputProps={{
          name: 'monthlyIncome',
          control: control,
          label: form.monthlyIncome.label,
          selectProps: {
            options: Object.entries(MONTHLY_INCOME_OPTIONS).map(
              ([value, labelKey]) => ({
                value: t(`forms.familyAndFinancialInfo.${value}`),
                label: t(`forms.familyAndFinancialInfo.${labelKey}`),
              })
            ),
          },
        }}
      />

      <ControlledSelect
        name="housingStatus"
        control={control}
        label={form.housingStatus.label}
        rules={{
          required: { value: true, message: form.housingStatus.required },
        }}
        className="w-full"
        selectProps={{
          options: Object.entries(HOUSING_STATUS_OPTIONS).map(
            ([value, labelKey]) => ({
              value,
              label: t(`forms.familyAndFinancialInfo.${labelKey}`),
            })
          ),
        }}
      />
    </div>
  );
};

export default FamilyAndFinancialInfoForm;
