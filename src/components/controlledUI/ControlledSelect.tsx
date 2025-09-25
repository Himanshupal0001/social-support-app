import React from 'react';
import {
  Controller,
  useWatch,
  type Control,
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
} from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';

type TControlledSelectProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
  selectProps: {
    options: { value: string; label: string }[];
    onChange?: (value: string) => void;
  };
  className?: string;
} & Partial<UseControllerProps<TFieldValues>>;

export default function ControlledSelect<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  rules,
  defaultValue,
  disabled,
  selectProps,
  className,
}: TControlledSelectProps<TFieldValues>) {
  const selectedValue = useWatch({ name, control });

  return (
    <Controller
      name={name}
      control={control}
      rules={rules ?? {}}
      defaultValue={defaultValue as unknown as TFieldValues[typeof name]}
      disabled={disabled ?? false}
      render={({ field, fieldState }) => (
        <FormItem key={selectedValue}>
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
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                selectProps.onChange?.(value);
              }}
              defaultValue={field.value}
            >
              <SelectTrigger className={className}>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {selectProps.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
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
