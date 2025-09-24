import React from 'react';
import {
  type Control,
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
  Controller,
} from 'react-hook-form';
import { FormControl, FormItem, FormLabel } from '../ui/form';
import { FormDescription } from '../ui/form';
import { Textarea } from '../ui/textarea';

type TControlledTextAreaProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
  textAreaProps: React.ComponentProps<'textarea'>;
  className?: string;
} & Partial<UseControllerProps<TFieldValues>>;

const ControlledTextArea = ({
  name,
  control,
  label,
  description,
  className,
  rules,
  disabled,
  defaultValue,
  ...textAreaProps
}: TControlledTextAreaProps<FieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules ?? {}}
      defaultValue={defaultValue as unknown as FieldValues[typeof name]}
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
            <Textarea {...textAreaProps} {...field} className={className} />
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
};

export default ControlledTextArea;
