import React from 'react';
import { H1, Input } from 'uikit';
import { MdSearch } from 'react-icons/md';
import {
  StyledHeader
} from './styled';

export const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <H1>Записи</H1>
      <Input icon={MdSearch} iconPosition="right" />
    </StyledHeader>
  );
};
