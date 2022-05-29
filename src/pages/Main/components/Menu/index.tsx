import React from 'react';
import { IconButton } from 'uikit';
import { Link as RouterLink } from 'react-router-dom';
import {
  MdOutlineCalendarToday,
  MdOutlineTask,
  MdOutlineHistory,
  MdOutlineSettings
} from 'react-icons/md';
import { VscAdd } from 'react-icons/vsc';
import {
  Menu as StyledMenu,
  AddButtonWrap,
  Link
} from './styled';

export const Menu = (): JSX.Element => {
  return (
    <StyledMenu>
      <Link to="/history">
        <MdOutlineHistory size={32} fill="#9090B1" />
      </Link>
      <Link to="/" style={{ marginRight: '32px'}}>
        <MdOutlineCalendarToday size={32} fill="#9090B1" />
      </Link>
      <AddButtonWrap>
        <RouterLink to="/create/step-1">
          <IconButton>
            {VscAdd}
          </IconButton>
        </RouterLink>
      </AddButtonWrap>
      <Link to="/notes" style={{ marginLeft: '32px'}}>
        <MdOutlineTask size={32} fill="#9090B1" />
      </Link>
      <Link to="/settings">
        <MdOutlineSettings size={32} fill="#9090B1" />
      </Link>
    </StyledMenu>
  );
};
