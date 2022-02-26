import React, { ChangeEvent, useState } from 'react';

type typesValidationEnum = 'email' | 'username' | 'notEmpty';

type typesValidationInterface = {
  [key in typesValidationEnum]: { regex: RegExp; message: string };
};

const validation: typesValidationInterface = {
  notEmpty: {
    regex: /^[^]+$/,
    message: 'Preencha um usuário válido',
  },
  username: {
    regex: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
    message: 'Preencha um usuário válido',
  },
  email: {
    regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: 'Preencha um email válido',
  },
};

const useForm = (type: typesValidationEnum | boolean) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>('');

  function onChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (error) validate(target?.value);
    setValue(target?.value);
  }

  function validate(value?: string) {
    if (type === false) return true;
    if (!value) {
      setError('Preencha um valor válido.');
      return false;
    }
    if (typeof type !== 'boolean' && !validation[type].regex.test(value)) {
      setError(validation[type].message);
      return false;
    }
    setError(null);
    return true;
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
