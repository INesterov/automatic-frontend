import React from 'react';
import { StyledButton } from './styled';

type Props = {
  children: string;
  onClick: () => void;
}

export const Button = (props: Props): JSX.Element => {
  const { children, onClick } = props;

  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
};
