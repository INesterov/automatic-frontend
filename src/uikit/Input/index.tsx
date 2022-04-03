import React from 'react';
import { IconType } from 'react-icons';
import { StyledInput, Container, IconWrap } from './styled';

type Props = {
  placeholder?: string;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  type?: HTMLInputElement['type'];
}

export const Input = (props: Props):JSX.Element => {
  const { placeholder, icon: Icon, iconPosition, type } = props;

  return (
    <Container>
      {iconPosition === 'left' && Icon && (
        <IconWrap position={iconPosition}>
          <Icon fill="#9090B1" size={16} />
        </IconWrap>
      )}
      <StyledInput position={iconPosition} placeholder={placeholder} type={type} />
      {iconPosition === 'right' && Icon && (
        <IconWrap position={iconPosition}>
          <Icon fill="#9090B1" size={16} />
        </IconWrap>
      )}
    </Container>
  );
};
