import ControlledDate from '@/components/controlledUI/ControlledDate';
import ControlledInput from '@/components/controlledUI/ControlledInput';
import ControlledPhoneNumberInput from '@/components/controlledUI/ControlledPhoneNumberInput';
import ControlledSelect from '@/components/controlledUI/ControlledSelect';
import ControlledTextArea from '@/components/controlledUI/ControlledTextArea';
import RegionSelectorInput from '@/components/controlledUI/region-selector/RegionSelectorInput';
import type { TPersonalInformationFormTranslation } from '@/localization/types/forms';
import { useWatch, type Control, type FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  GENDER_OPTIONS,
  NATIONAL_ID_OPTIONS,
  PERSONAL_INFO_CONSTANTS,
} from '@/lib/enums/social-form-enum';

type Props = {
  control: Control<FieldValues>;
};

const PersonalInformationForm = ({ control }: Props) => {
  const [state, country] = useWatch({
    control,
    name: ['state', 'country'],
  });

  const { t } = useTranslation();
  const form = t('forms.personalInformation', {
    returnObjects: true,
  }) as TPersonalInformationFormTranslation;

  return (
    <div className="space-y-4">
      <div className="space-y-4 md:flex md:flex-row md:space-x-4">
        <div className="flex-1">
          <ControlledInput
            name="name"
            control={control}
            label={form.name.label}
            rules={{
              required: { value: true, message: form.name.required },
              minLength: {
                value: PERSONAL_INFO_CONSTANTS.NAME_MIN_LENGTH,
                message: form.name.minLength,
              },
              maxLength: {
                value: PERSONAL_INFO_CONSTANTS.NAME_MAX_LENGTH,
                message: form.name.maxLength,
              },
            }}
            placeholder={form.name.placeholder}
          />
        </div>

        <div className="flex-1">
          <ControlledSelect
            name="nationalId"
            control={control}
            label={form.nationalId.label}
            rules={{
              required: form.nationalId.required,
            }}
            className="w-full"
            selectProps={{
              options: Object.entries(NATIONAL_ID_OPTIONS).map(
                ([value, labelKey]) => ({
                  value,
                  label: t(`forms.personalInformation.${labelKey}`),
                })
              ),
            }}
          />
        </div>
      </div>

      <div className="space-y-4 md:flex md:flex-row md:space-x-4">
        <div className="flex-1">
          <ControlledDate
            name="dateOfBirth"
            control={control}
            label={form.dateOfBirth.label}
            rules={{
              required: form.dateOfBirth.required,
            }}
            className="w-full"
          />
        </div>

        <div className="flex-1">
          <ControlledSelect
            name="gender"
            control={control}
            label={form.gender.label}
            rules={{
              required: form.gender.required,
            }}
            selectProps={{
              options: Object.entries(GENDER_OPTIONS).map(
                ([value, labelKey]) => ({
                  value,
                  label: t(`forms.personalInformation.${labelKey}`),
                })
              ),
            }}
            className="w-full"
          />
        </div>
      </div>

      <ControlledTextArea
        name="address"
        control={control}
        label={form.address.label}
        rules={{
          required: form.address.required,
        }}
        textAreaProps={{
          placeholder: form.address.placeholder,
          maxLength: PERSONAL_INFO_CONSTANTS.ADDRESS_MAX_LENGTH,
        }}
        className="w-full"
      />

      <RegionSelectorInput
        control={control}
        cityField={{
          name: 'city',
          label: form.city.label,
          rules: {
            required: { value: true, message: form.city.required },
            validate: () => {
              if (!state || !country) {
                return form.city.required;
              }
              return true;
            },
          },
          className: 'w-full',
        }}
        stateField={{
          name: 'state',
          label: form.state.label,
          rules: {
            required: { value: true, message: form.state.required },
            validate: () => {
              if (!country) {
                return form.state.required;
              }
              return true;
            },
          },
          className: 'w-full',
        }}
        countryField={{
          name: 'country',
          label: form.country.label,
          rules: {
            required: { value: true, message: form.country.required },
          },
          className: 'w-full',
        }}
        containerClassName="space-y-4 md:flex md:flex-row md:space-x-4"
      />

      <div className="space-y-4 md:flex md:flex-row md:space-x-4">
        <div className="flex-1">
          <ControlledPhoneNumberInput
            name="phoneNumber"
            control={control}
            label={form.phoneNumber.label}
            rules={{
              required: form.phoneNumber.required,
              pattern: {
                value: PERSONAL_INFO_CONSTANTS.PHONE_PATTERN,
                message: form.phoneNumber.required,
              },
            }}
            defaultCountry={PERSONAL_INFO_CONSTANTS.DEFAULT_COUNTRY}
            type="phone"
          />
        </div>

        <div className="flex-1">
          <ControlledInput
            name="email"
            control={control}
            label={form.email.label}
            rules={{
              required: form.email.required,
              pattern: {
                value: PERSONAL_INFO_CONSTANTS.EMAIL_PATTERN,
                message: form.email.required,
              },
            }}
            type="email"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationForm;
