import React from 'react';
import { H1, Input } from 'uikit';
import { MdSearch } from 'react-icons/md';
import {
  StyledHeader
} from './styled';

type Props = {
  onSearch: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const Header = (props: Props): JSX.Element => {
  const { onSearch } = props;

  return (
    <StyledHeader>
      <H1>Записи</H1>
      <Input icon={MdSearch} iconPosition="right" onBlur={onSearch}/>
    </StyledHeader>
  );
};
