import React from 'react';
import { MdRemoveRedEye } from 'react-icons/md';
import { InputProps, Input } from '../Input';

export const PasswordInput = (props: InputProps): JSX.Element => {
  const [type, setType] = React.useState('password');

  const togglePassword = React.useCallback(() => {
    setType(state => state === 'text' ? 'password' : 'text');
  }, []);

  return (
    <Input {...props} icon={MdRemoveRedEye} iconPosition="right" type={type} onIconClick={togglePassword} />
  );
};
