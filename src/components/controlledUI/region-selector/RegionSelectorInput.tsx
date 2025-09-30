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
import { TFFIELD_NAME } from '@/lib/enums/social-form-enum';

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
  const [selectedCountry, selectedState, selectedCity] = useWatch({
    control,
    name: [countryField.name, stateField.name, cityField.name],
  });

  const { setValue } = useFormContext<TFieldValues>();

  const countryOptions = Object.entries(regionData).map(([key, val]) => {
    return {
      value: key,
      label: val.name,
    };
  });

  const stateOptions =
    selectedCountry && regionData[selectedCountry as keyof typeof regionData]
      ? Object.entries(
          regionData[selectedCountry as keyof typeof regionData].states
        ).map(([key, val]) => ({
          value: key,
          label: val.name,
        }))
      : [];

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
          label={countryField.label || TFFIELD_NAME.country}
          description={countryField.description}
          {...(countryField.className && { className: countryField.className })}
          {...(countryField.rules && { rules: countryField.rules })}
          disabled={countryField.disabled ?? false}
          selectProps={{
            options: countryOptions,
            onChange: () => {
              setValue(
                stateField.name,
                '' as unknown as TFieldValues[FieldPath<TFieldValues>]
              );
              setValue(
                cityField.name,
                '' as unknown as TFieldValues[FieldPath<TFieldValues>]
              );
            },
          }}
        />
      </div>

      <div className="flex-1">
        <ControlledSelect<TFieldValues>
          key={selectedCountry + selectedState}
          name={stateField.name}
          control={control}
          label={stateField.label || TFFIELD_NAME.state}
          description={stateField.description}
          {...(stateField.className && { className: stateField.className })}
          {...(stateField.rules && { rules: stateField.rules })}
          {...(stateField.defaultValue !== undefined && {
            defaultValue: stateField.defaultValue,
          })}
          // disabled={
          //   stateField.disabled || !selectedCountry || selectedCountry === ''
          // }
          selectProps={{
            options: selectedCountry ? stateOptions : [],
            onChange: (value) => {
              setValue(
                cityField.name,
                '' as unknown as TFieldValues[FieldPath<TFieldValues>]
              );
            },
          }}
        />
      </div>

      <div className="flex-1">
        <ControlledSelect<TFieldValues>
          key={selectedCity}
          name={cityField.name}
          control={control}
          label={cityField.label || TFFIELD_NAME.city}
          description={cityField.description}
          {...(cityField.className && { className: cityField.className })}
          {...(cityField.rules && { rules: cityField.rules })}
          {...(cityField.defaultValue !== undefined && {
            defaultValue: cityField.defaultValue,
          })}
          // disabled={
          //   cityField.disabled ||
          //   !selectedCountry ||
          //   selectedCountry === '' ||
          //   !selectedState ||
          //   selectedState === ''
          // }
          selectProps={{
            options: cityOptions,
          }}
        />
      </div>
    </div>
  );
}
