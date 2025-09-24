import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import useReactHookForm from '@/hooks/useReactHookForm';
import ControlledInput from '../controlledUI/ControlledInput';
import ControlledSelect from '../controlledUI/ControlledSelect';
import ControlledDate from '../controlledUI/ControlledDate';
import RegionSelectorInput from '../controlledUI/region-selector/RegionSelectorInput';
import ControlledTextArea from '../controlledUI/ControlledTextArea';
import ControlledPhoneNumberInput from '../controlledUI/ControlledPhoneNumberInput';

export default function PersonalInfoForm() {
  const formProps = useReactHookForm();

  function onSubmit(values: any) {
    try {
      console.log(values);
    } catch (error) {
      console.error('Form submission error', error);
    }
  }

  return (
    <Form {...formProps}>
      <form
        onSubmit={formProps.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10"
      >
        <ControlledInput
          name="name"
          control={formProps.control}
          label="Name"
          rules={{
            required: 'Please enter your full name',
            minLength: 3,
            maxLength: 100,
          }}
          placeholder="Enter you full name"
        />
        <ControlledSelect
          name="nationalId"
          control={formProps.control}
          label="National ID"
          rules={{
            required: 'National ID is required',
          }}
          className="w-full"
          selectProps={{
            options: [
              { value: 'passport', label: 'Passport' },
              { value: 'familyBook', label: 'Family Book' },
            ],
          }}
        />

        <ControlledDate
          name="dateOfBirth"
          control={formProps.control}
          label="Date of Birth"
          rules={{
            required: 'Date of Birth is required',
          }}
          className="w-full"
        />

        <ControlledInput
          name="email"
          control={formProps.control}
          label="Email"
          rules={{
            required: 'Email is required',
          }}
          type="email"
        />

        <RegionSelectorInput
          control={formProps.control}
          countryField={{
            name: 'country',
            label: 'Country',
            className: 'w-full',
            rules: {
              required: 'Country is required',
            },
          }}
          stateField={{
            name: 'state',
            label: 'State',
            className: 'w-full',
            rules: {
              required: 'State is required',
            },
          }}
          cityField={{
            name: 'city',
            label: 'City',
            className: 'w-full',
            rules: {
              required: 'City is required',
            },
          }}
        />

        <ControlledPhoneNumberInput
          name="phoneNumber"
          control={formProps.control}
          label="Phone Number"
          rules={{
            required: 'Phone Number is required',
          }}
          defaultCountry="AE"
        />

        <ControlledSelect
          name="gender"
          control={formProps.control}
          label="Gender"
          rules={{
            required: 'Gender is required',
          }}
          selectProps={{
            options: [
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' },
            ],
          }}
          className="w-full"
        />

        <ControlledTextArea
          name="address"
          control={formProps.control}
          label="Address"
          rules={{
            required: 'Address is required',
          }}
          textAreaProps={{
            placeholder: 'Enter your address',
            maxLength: 500,
          }}
          className="w-full"
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
