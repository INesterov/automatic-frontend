import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 64px;
  width: 64px;
  border: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #9A9CFC;
  border-radius: 100%;
  transition: background 0.2s;

  &:active {
    background: #8f91f6;
  }
`;
