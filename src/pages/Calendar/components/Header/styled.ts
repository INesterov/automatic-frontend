import styled from 'styled-components';

export const Header = styled.div`
  height: 48px;
  border-bottom: 1px solid #DCDCF5;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Toolbar = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 4px;
`;

export const ArrowButton = styled.button`
  background-color: #E7E7FC;
  border-radius: 4px;
  border: none;
  outline: transparent;

  &:active {
    background: #d2d2e7;
  }
`;

export const ToodayButton = styled.button`
  background-color: #9A9CFC;
  border: none;
  outline: transparent;
  padding: 9px;
  color: #ffffff;
  border-radius: 4px;

  &:active {
    background: #8f91f6;
  }
`;