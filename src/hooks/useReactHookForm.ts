import { useForm } from 'react-hook-form';
import type { UseFormProps } from 'react-hook-form';

const useReactHookForm = (props?: UseFormProps) => {
  const formProps = useForm(props);

  const setValues = (formValues: unknown = {}) => {
    Object.keys(formValues || {}).forEach((key) => {
      formProps.setValue(key, formValues[key] || undefined);
    });
  };

  return { ...formProps, setValues };
};

export default useReactHookForm;
