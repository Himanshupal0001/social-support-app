import type {
  Control,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { Controller } from 'react-hook-form';
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from '@/components/ui/form';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

type TControlledDateProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
} & Partial<UseControllerProps<TFieldValues>>;

export default function ControlledDate<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  description,
  className,
  rules,
  defaultValue,
  disabled,
}: TControlledDateProps<TFieldValues>) {
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
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[240px] pl-3 text-left font-normal',
                    !field.value && 'text-muted-foreground',
                    className
                  )}
                >
                  {field.value ? (
                    format(field.value, 'dd/MM/yyyy')
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
              />
            </PopoverContent>
          </Popover>
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
