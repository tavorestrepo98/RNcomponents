import {useState} from 'react';

export const useForm = <T extends Object>(initialValue: T) => {
  const [form, setForm] = useState(initialValue);

  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return {
    form,
    onChange,
  };
};
