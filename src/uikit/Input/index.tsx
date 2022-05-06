import React from 'react';
import { IconType } from 'react-icons';
import { StyledInput, Container, IconWrap } from './styled';

export type InputProps = {
  placeholder?: string;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  type?: HTMLInputElement['type'];
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIconClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
}

export const Input = (props: InputProps):JSX.Element => {
  const { placeholder, icon: Icon, iconPosition, onIconClick, ...restProps } = props;

  return (
    <Container>
      {iconPosition === 'left' && Icon && (
        <IconWrap position={iconPosition} onClick={onIconClick && onIconClick}>
          <Icon fill="#9090B1" size={16} />
        </IconWrap>
      )}
      <StyledInput position={iconPosition} placeholder={placeholder} {...restProps} />
      {iconPosition === 'right' && Icon && (
        <IconWrap position={iconPosition} onClick={onIconClick && onIconClick}>
          <Icon fill="#9090B1" size={16} />
        </IconWrap>
      )}
    </Container>
  );
};
