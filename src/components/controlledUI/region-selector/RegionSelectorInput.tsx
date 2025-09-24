// RegionSelectorInput.tsx
import React, { useEffect } from 'react';
import {
  useWatch,
  useFormContext,
  type Control,
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
} from 'react-hook-form';
import ControlledSelect from '../ControlledSelect';
import { regionData } from './regionData';

type TRegionSelectorInputProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  countryField: {
    name: FieldPath<TFieldValues>;
    label?: React.ReactNode;
    description?: React.ReactNode;
    className?: string;
    rules?: UseControllerProps<TFieldValues>['rules'];
    defaultValue?: TFieldValues[FieldPath<TFieldValues>];
    disabled?: boolean;
  };
  stateField: {
    name: FieldPath<TFieldValues>;
    label?: React.ReactNode;
    description?: React.ReactNode;
    className?: string;
    rules?: UseControllerProps<TFieldValues>['rules'];
    defaultValue?: TFieldValues[FieldPath<TFieldValues>];
    disabled?: boolean;
  };
  cityField: {
    name: FieldPath<TFieldValues>;
    label?: React.ReactNode;
    description?: React.ReactNode;
    className?: string;
    rules?: UseControllerProps<TFieldValues>['rules'];
    defaultValue?: TFieldValues[FieldPath<TFieldValues>];
    disabled?: boolean;
  };
  containerClassName?: string;
};

export default function RegionSelectorInput<TFieldValues extends FieldValues>({
  control,
  countryField,
  stateField,
  cityField,
  containerClassName,
}: TRegionSelectorInputProps<TFieldValues>) {
  const selectedCountry = useWatch({ control, name: countryField.name });
  const selectedState = useWatch({ control, name: stateField.name });
  const { setValue } = useFormContext<TFieldValues>();

  // Reset state field when country changes
  useEffect(() => {
    if (selectedCountry && selectedCountry !== '') {
      setValue(stateField.name, '' as TFieldValues[FieldPath<TFieldValues>]);
      setValue(cityField.name, '' as TFieldValues[FieldPath<TFieldValues>]);
    }
  }, [selectedCountry, setValue, stateField.name, cityField.name]);

  // Reset city field when state changes
  useEffect(() => {
    if (selectedState && selectedState !== '') {
      setValue(cityField.name, '' as TFieldValues[FieldPath<TFieldValues>]);
    }
  }, [selectedState, setValue, cityField.name]);

  // Generate country options from static data
  const countryOptions = Object.entries(regionData).map(([key, val]) => ({
    value: key,
    label: val.name,
  }));

  // Generate state options based on selected country
  const stateOptions =
    selectedCountry &&
    selectedCountry !== '' &&
    regionData[selectedCountry as keyof typeof regionData]
      ? Object.entries(
          regionData[selectedCountry as keyof typeof regionData].states
        ).map(([key, val]) => ({
          value: key,
          label: val.name,
        }))
      : [];

  // Generate city options based on selected country and state
  const cityOptions = (() => {
    if (
      !selectedCountry ||
      selectedCountry === '' ||
      !selectedState ||
      selectedState === ''
    )
      return [];

    const country = regionData[selectedCountry as keyof typeof regionData];
    if (!country) return [];

    const state = country.states[selectedState as keyof typeof country.states];
    if (!state) return [];

    return (state as { cities: string[] }).cities.map((city: string) => ({
      value: city.toLowerCase().replace(/\s+/g, '_'),
      label: city,
    }));
  })();

  return (
    <div className={containerClassName || 'space-y-4'}>
      <ControlledSelect<TFieldValues>
        name={countryField.name}
        control={control}
        label={countryField.label || 'Country'}
        description={countryField.description}
        {...(countryField.className && { className: countryField.className })}
        {...(countryField.rules && { rules: countryField.rules })}
        {...(countryField.defaultValue !== undefined && {
          defaultValue: countryField.defaultValue,
        })}
        disabled={countryField.disabled ?? false}
        selectProps={{
          options: countryOptions,
        }}
      />
      <ControlledSelect<TFieldValues>
        name={stateField.name}
        control={control}
        label={stateField.label || 'State'}
        description={stateField.description}
        {...(stateField.className && { className: stateField.className })}
        {...(stateField.rules && { rules: stateField.rules })}
        {...(stateField.defaultValue !== undefined && {
          defaultValue: stateField.defaultValue,
        })}
        disabled={
          stateField.disabled || !selectedCountry || selectedCountry === ''
        }
        selectProps={{
          options: stateOptions,
        }}
      />
      <ControlledSelect<TFieldValues>
        name={cityField.name}
        control={control}
        label={cityField.label || 'City'}
        description={cityField.description}
        {...(cityField.className && { className: cityField.className })}
        {...(cityField.rules && { rules: cityField.rules })}
        {...(cityField.defaultValue !== undefined && {
          defaultValue: cityField.defaultValue,
        })}
        disabled={
          cityField.disabled ||
          !selectedCountry ||
          selectedCountry === '' ||
          !selectedState ||
          selectedState === ''
        }
        selectProps={{
          options: cityOptions,
        }}
      />
    </div>
  );
}
