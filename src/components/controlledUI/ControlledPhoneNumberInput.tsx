import React from 'react';
import type {
  Control,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { Controller } from 'react-hook-form';
import * as RPNInput from 'react-phone-number-input';

import { PhoneInput } from '@/components/ui/phone-input';
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from '@/components/ui/form';

type TControlledPhoneNumberInputProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
  phoneInputClassName?: string;
} & Partial<UseControllerProps<TFieldValues>> &
  Omit<
    React.ComponentProps<'input'>,
    'name' | 'defaultValue' | 'onChange' | 'value' | 'disabled'
  > &
  Omit<RPNInput.Props<typeof RPNInput.default>, 'onChange' | 'value'>;

export default function ControlledPhoneNumberInput<
  TFieldValues extends FieldValues
>({
  name,
  control,
  label,
  description,
  rules,
  defaultValue,
  disabled,
  ...phoneInputProps
}: TControlledPhoneNumberInputProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules ?? {}}
      defaultValue={defaultValue as unknown as TFieldValues[typeof name]}
      disabled={disabled ?? false}
      render={({ field, fieldState }) => (
        <FormItem>
          {label ? (
            <FormLabel className="flex items-center gap-1">
              <span>{label}</span>
              {rules?.required ? (
                <span aria-hidden="true" className="text-red-500">
                  *
                </span>
              ) : null}
            </FormLabel>
          ) : null}
          <FormControl>
            <PhoneInput
              {...phoneInputProps}
              value={field.value as RPNInput.Value}
              onChange={field.onChange}
              aria-invalid={!!fieldState.error}
            />
          </FormControl>
          {description ? (
            <FormDescription>{description}</FormDescription>
          ) : null}
          {fieldState.error ? (
            <p className="text-destructive text-sm mt-1">
              {fieldState.error?.message ||
                String(fieldState.error?.message ?? '')}
            </p>
          ) : null}
        </FormItem>
      )}
    />
  );
}
