import React from 'react';
import { StyledButton } from './styled';

type Props = {
  children: string;
}

export const Button = (props: Props): JSX.Element => {
  const { children } = props;

  return (
    <StyledButton>{children}</StyledButton>
  );
};
