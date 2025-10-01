import React from 'react';
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
} from 'react-hook-form';
import { FormControl, FormItem, FormLabel } from '../ui/form';
import { CurrencySelect } from '../ui/currency-select';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import type { TCurrencySelectTranslation } from '@/localization/types/forms';
import { useTranslation } from 'react-i18next';

type TControlledCurrencySelectProps<TFieldValues extends FieldValues> = {
  currencies: 'custom' | 'all';
  defaultCurrency?: string;
  variant?: 'default' | 'small';
  selectInputProps: {
    name: FieldPath<TFieldValues>;
    control: Control<TFieldValues>;
    label?: React.ReactNode;
    description?: React.ReactNode;
    selectProps: {
      options: { value: string; label: string }[];
      onChange?: (value: { currency: string; range: string }) => void;
    };
    className?: string;
  };
} & Partial<UseControllerProps<TFieldValues>> &
  React.SelectHTMLAttributes<HTMLSelectElement>;

const ControlledCurrencySelect = ({
  currencies,
  defaultCurrency,
  selectInputProps,
  rules,
  defaultValue,
  variant,
  disabled,
}: TControlledCurrencySelectProps<FieldValues>) => {
  const { name, control, label, selectProps } = selectInputProps;

  const { t } = useTranslation();
  const form = t('forms.currencySelect', {
    returnObjects: true,
  }) as TCurrencySelectTranslation;

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (value) => {
          if (value === undefined || value === '') {
            return form.errors.required;
          }
          if (value.currency === undefined || value.currency === '') {
            return form.currency;
          }
          if (value.range === undefined || value.range === '') {
            return form.range;
          }
          return true;
        },
      }}
      defaultValue={defaultValue ?? undefined}
      disabled={disabled ?? false}
      render={({ field, fieldState }) => {
        return (
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
              <div className="flex items-center gap-1">
                <div className="">
                  <CurrencySelect
                    value={field?.value?.currency}
                    name={`${name}-currency`}
                    disabled={disabled ?? false}
                    aria-invalid={!!fieldState.error}
                    currencies={currencies}
                    variant={variant || 'default'}
                    onValueChange={(currency) => {
                      const values = { ...field?.value, currency };
                      field.onChange(values);
                      if (field?.value?.currency && field?.value?.range) {
                        selectProps.onChange?.(values);
                      }
                    }}
                    onCurrencySelect={() => {}}
                    defaultValue={defaultCurrency || 'USD'}
                  />
                </div>

                <div className="flex-1">
                  <Select
                    key={field?.value?.range}
                    onValueChange={(range) => {
                      const values = { ...field?.value, range };
                      field.onChange(values);
                      if (field?.value?.currency && field?.value?.range) {
                        selectProps.onChange?.(values);
                      }
                    }}
                    defaultValue={field?.value}
                    disabled={false}
                    required={true}
                    value={field?.value?.range}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectProps.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </FormControl>
            {fieldState.error ? (
              <p className="text-destructive text-sm mt-1">
                {fieldState.error?.message ||
                  String(fieldState.error?.message ?? '')}
              </p>
            ) : null}
          </FormItem>
        );
      }}
    />
  );
};

export default ControlledCurrencySelect;
