import React from 'react';
import { StyledButton } from './styled';

type Props = {
  children: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  view?: 'shape' | 'ghost';
}

export const Button = (props: Props): JSX.Element => {
  const { children, onClick, type, view = 'shape' } = props;

  return (
    <StyledButton view={view} onClick={onClick} type={type}>{children}</StyledButton>
  );
};
