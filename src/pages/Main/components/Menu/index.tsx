import React from 'react';
import { IconButton } from 'uikit';
import { Link as RouterLink } from 'react-router-dom';
import { MdOutlineCalendarToday, MdOutlineTask } from 'react-icons/md';
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
        <MdOutlineCalendarToday size={32} fill="#9090B1" />
      </Link>
      <AddButtonWrap>
        <RouterLink to="/create/step-1">
          <IconButton>
            {VscAdd}
          </IconButton>
        </RouterLink>
      </AddButtonWrap>
      <Link to="/notes">
        <MdOutlineTask size={32} fill="#9090B1" />
      </Link>
    </StyledMenu>
  );
};
