import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.div`
  height: 78px;
  margin-top: 32px;
  border-radius: 40px;
  border-top: 2px solid #DCDCF5;
  display: flex;
  align-items: center;
  padding: 0 48px;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  margin: 0;
  bottom: 0;
  box-sizing: border-box;
  background-color: #ffffff;
`;

export const AddButtonWrap = styled.div`
  position: absolute;
  top: -16px;
  right: 50%;
  transform: translate(50%, 0);
`;

export const Link = styled(NavLink)`
  &.active {
    > svg {
      fill: #9A9CFC;
    }
  }
`;
