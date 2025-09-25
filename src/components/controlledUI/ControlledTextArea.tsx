import React from 'react';
import {
  type Control,
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
  Controller,
} from 'react-hook-form';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { FormDescription } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

type TControlledTextAreaProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  label?: React.ReactNode;
  renderExtraLabel?: React.ReactNode;
  description?: React.ReactNode;
  textAreaProps: React.ComponentProps<'textarea'>;
  className?: string;
} & Partial<UseControllerProps<TFieldValues>>;

const ControlledTextArea = <TFieldValues extends FieldValues = FieldValues>({
  name,
  control,
  label,
  renderExtraLabel,
  description,
  className,
  rules,
  disabled,
  defaultValue,
  ...textAreaProps
}: TControlledTextAreaProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules ?? {}}
      defaultValue={defaultValue as unknown as FieldValues[typeof name]}
      disabled={disabled ?? false}
      render={({ field, fieldState }) => (
        <FormItem>
          {(label || renderExtraLabel) && (
            <div className="flex flex-row">
              {label && (
                <FormLabel className="flex items-center gap-1">
                  <span>{label}</span>
                  {rules?.required ? (
                    <span aria-hidden="true" className="text-red-500">
                      *
                    </span>
                  ) : null}
                </FormLabel>
              )}

              {renderExtraLabel}
            </div>
          )}
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
