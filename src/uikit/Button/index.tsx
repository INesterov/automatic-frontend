import React from 'react';
import { StyledButton } from './styled';

type Props = {
  children: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export const Button = (props: Props): JSX.Element => {
  const { children, onClick, type } = props;

  return (
    <StyledButton onClick={onClick} type={type}>{children}</StyledButton>
  );
};
