import React from 'react';
import { H1, Input } from 'uikit';
import { MdSearch } from 'react-icons/md';
import {
  StyledHeader
} from './styled';

type Props = {
  onSearch?: (e: React.FocusEvent<HTMLInputElement>) => void;
  title?: string;
}

export const Header = (props: Props): JSX.Element => {
  const { onSearch, title } = props;

  return (
    <StyledHeader>
      <H1 style={{ marginRight: '16px'}}>{title || 'Записи'}</H1>
      {onSearch && (
        <Input icon={MdSearch} iconPosition="right" onBlur={onSearch}/>
      )}
    </StyledHeader>
  );
};
