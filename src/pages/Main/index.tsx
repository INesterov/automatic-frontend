import React from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from './components/Menu';
import {
  Container,
  Content
} from './styled';

export const Main = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <Outlet />
      </Content>
      <Menu />
    </Container>
  );
};
