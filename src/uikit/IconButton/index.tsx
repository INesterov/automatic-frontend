import React from 'react';
import { IconType } from 'react-icons';
import { StyledButton } from './styled';

type Props = {
  children: IconType;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export const IconButton = (props: Props): JSX.Element => {
  const { children: Icon, onClick, type } = props;

  return (
    <StyledButton onClick={onClick} type={type}>
      <Icon size={32} fill="#ffffff" />
    </StyledButton>
  );
};
