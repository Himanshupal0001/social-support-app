import * as React from 'react';
import type {
  Control,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from '@/components/ui/form';

type ControlledInputProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
  inputClassName?: string;
} & Partial<UseControllerProps<TFieldValues>> &
  Omit<
    React.ComponentProps<'input'>,
    'name' | 'defaultValue' | 'onChange' | 'value' | 'disabled'
  >;

export default function ControlledInput<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  description,
  inputClassName,
  rules,
  defaultValue,
  disabled,
  ...inputProps
}: ControlledInputProps<TFieldValues>) {
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
            <FormLabel>
              <span>{label}</span>
              {rules?.required ? (
                <span aria-hidden="true" className="text-red-500 ml-0.5">
                  *
                </span>
              ) : null}
            </FormLabel>
          ) : null}
          <FormControl>
            <Input
              {...inputProps}
              {...field}
              className={inputClassName}
              disabled={disabled}
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
