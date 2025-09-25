// RegionSelectorInput.tsx
import React from 'react';
import {
  useWatch,
  useFormContext,
  type Control,
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
} from 'react-hook-form';
import ControlledSelect from '@/components/controlledUI/ControlledSelect';
import { regionData } from './regionData';
import { cn } from '@/lib/utils';

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
  const selectedCity = useWatch({ control, name: cityField.name });

  const { setValue } = useFormContext<TFieldValues>();

  // Generate country options from static data
  const countryOptions = Object.entries(regionData).map(([key, val]) => ({
    value: key,
    label: val.name,
  }));

  // Generate state options based on selected country
  const stateOptions =
    selectedCountry && regionData[selectedCountry as keyof typeof regionData]
      ? Object.entries(
          regionData[selectedCountry as keyof typeof regionData].states
        ).map(([key, val]) => ({
          value: key,
          label: val.name,
        }))
      : [];

  // Generate city options based on selected country and state
  const cityOptions = (() => {
    if (!selectedCountry) return [];
    if (!selectedState) return [];

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
    <div className={cn('space-y-4', containerClassName)}>
      <div className="flex-1">
        <ControlledSelect<TFieldValues>
          key={selectedCountry}
          name={countryField.name}
          control={control}
          label={countryField.label || 'Country'}
          description={countryField.description}
          {...(countryField.className && { className: countryField.className })}
          {...(countryField.rules && { rules: countryField.rules })}
          disabled={countryField.disabled ?? false}
          selectProps={{
            options: countryOptions,
            onChange: (value) => {
              setValue(stateField.name, '' as any);
              setValue(cityField.name, '' as any);
            },
          }}
        />
      </div>

      <div className="flex-1">
        <ControlledSelect<TFieldValues>
          key={selectedCountry + selectedState}
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
            onChange: (value) => {
              setValue(cityField.name, '' as any);
            },
          }}
        />
      </div>

      <div className="flex-1">
        <ControlledSelect<TFieldValues>
          key={selectedCity}
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
    </div>
  );
}
