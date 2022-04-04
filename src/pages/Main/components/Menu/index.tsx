import React from 'react';
import { IconButton } from 'uikit';
import { MdOutlineHome, MdOutlineTask } from 'react-icons/md';
import { VscAdd } from 'react-icons/vsc';
import {
  Menu as StyledMenu,
  AddButtonWrap,
  Link
} from './styled';

export const Menu = (): JSX.Element => {
  return (
    <StyledMenu>
      <Link to="/">
        <MdOutlineHome size={32} fill="#9090B1" />
      </Link>
      <AddButtonWrap>
        <IconButton>
          {VscAdd}
        </IconButton>
      </AddButtonWrap>
      <Link to="/notes">
        <MdOutlineTask size={32} fill="#9090B1" />
      </Link>
    </StyledMenu>
  );
};
