import ControlledInput from '@/components/controlledUI/ControlledInput';
import ControlledSelect from '@/components/controlledUI/ControlledSelect';
import type { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type Props = {
  control: Control<any>;
};

const FamilyAndFinancialInfoForm = ({ control }: Props) => {
  const { t } = useTranslation();
  const form = t('forms.familyAndFinancialInfo', {
    returnObjects: true,
  }) as any;

  return (
    <div className="space-y-4">
      <ControlledSelect
        name="maritalStatus"
        control={control}
        label={form.maritalStatus.label}
        rules={{
          required: form.maritalStatus.required,
        }}
        className="w-full"
        selectProps={{
          options: [
            { value: 'single', label: form.maritalStatus.options.single },
            { value: 'married', label: form.maritalStatus.options.married },
            { value: 'widowed', label: form.maritalStatus.options.widowed },
            { value: 'divorced', label: form.maritalStatus.options.divorced },
            { value: 'separated', label: form.maritalStatus.options.separated },
            { value: 'other', label: form.maritalStatus.options.other },
          ],
        }}
      />

      <ControlledInput
        type="number"
        name="dependents"
        control={control}
        label={form.dependents.label}
        rules={{
          required: { value: true, message: form.dependents.required },
          max: { value: 10, message: form.dependents.max },
        }}
        placeholder={form.dependents.placeholder}
      />

      <ControlledSelect
        name="employmentStatus"
        control={control}
        label={form.employmentStatus.label}
        rules={{
          required: { value: true, message: form.employmentStatus.required },
        }}
        className="w-full"
        selectProps={{
          options: [
            {
              value: 'employed_full_time',
              label: form.employmentStatus.options.employedFullTime,
            },
            {
              value: 'employed_part_time',
              label: form.employmentStatus.options.employedPartTime,
            },
            {
              value: 'self_employed',
              label: form.employmentStatus.options.selfEmployed,
            },
            {
              value: 'unemployed',
              label: form.employmentStatus.options.unemployed,
            },
            { value: 'student', label: form.employmentStatus.options.student },
            { value: 'retired', label: form.employmentStatus.options.retired },
            {
              value: 'homemaker',
              label: form.employmentStatus.options.homemaker,
            },
            { value: 'other', label: form.employmentStatus.options.other },
          ],
        }}
      />

      <ControlledSelect
        name="monthlyIncome"
        control={control}
        label={form.monthlyIncome.label}
        rules={{
          required: { value: true, message: form.monthlyIncome.required },
        }}
        className="w-full"
        selectProps={{
          options: [
            { value: 'none', label: form.monthlyIncome.options.none },
            { value: '0_1000', label: form.monthlyIncome.options.range1 },
            { value: '1001_3000', label: form.monthlyIncome.options.range2 },
            { value: '3001_5000', label: form.monthlyIncome.options.range3 },
            { value: '5001_10000', label: form.monthlyIncome.options.range4 },
            { value: '10001_plus', label: form.monthlyIncome.options.range5 },
          ],
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
          options: [
            { value: 'own_home', label: form.housingStatus.options.ownHome },
            { value: 'renting', label: form.housingStatus.options.renting },
            {
              value: 'living_with_family',
              label: form.housingStatus.options.livingWithFamily,
            },
            {
              value: 'government_housing',
              label: form.housingStatus.options.governmentHousing,
            },
            {
              value: 'temporary_shelter',
              label: form.housingStatus.options.temporaryShelter,
            },
            { value: 'homeless', label: form.housingStatus.options.homeless },
          ],
        }}
      />
    </div>
  );
};

export default FamilyAndFinancialInfoForm;
