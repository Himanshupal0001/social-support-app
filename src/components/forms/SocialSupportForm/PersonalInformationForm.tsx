import ControlledDate from '@/components/controlledUI/ControlledDate';
import ControlledInput from '@/components/controlledUI/ControlledInput';
import ControlledPhoneNumberInput from '@/components/controlledUI/ControlledPhoneNumberInput';
import ControlledSelect from '@/components/controlledUI/ControlledSelect';
import ControlledTextArea from '@/components/controlledUI/ControlledTextArea';
import RegionSelectorInput from '@/components/controlledUI/region-selector/RegionSelectorInput';
import { useTranslation } from 'react-i18next';

type Props = {
  control: any;
};

const PersonalInformationForm = ({ control }: Props) => {
  const { t } = useTranslation();
  const form = t('forms.personalInformation', { returnObjects: true }) as any;

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
                value: 3,
                message: form.name.minLength,
              },
              maxLength: { value: 100, message: form.name.maxLength },
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
              options: [
                { value: 'passport', label: form.nationalId.options.passport },
                {
                  value: 'familyBook',
                  label: form.nationalId.options.familyBook,
                },
              ],
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
              options: [
                { value: 'male', label: form.gender.options.male },
                { value: 'female', label: form.gender.options.female },
                { value: 'other', label: form.gender.options.other },
              ],
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
          maxLength: 500,
        }}
        className="w-full"
      />

      <RegionSelectorInput
        control={control}
        cityField={{
          name: 'city',
          label: form.city.label,
          rules: { required: { value: true, message: form.city.required } },
          className: 'w-full',
        }}
        stateField={{
          name: 'state',
          label: form.state.label,
          rules: { required: { value: true, message: form.state.required } },
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
            }}
            defaultCountry="AE"
          />
        </div>

        <div className="flex-1">
          <ControlledInput
            name="email"
            control={control}
            label={form.email.label}
            rules={{
              required: form.email.required,
            }}
            type="email"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationForm;
