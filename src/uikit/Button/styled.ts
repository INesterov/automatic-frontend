import styled from 'styled-components';

type ButtonProps = {
  view: 'shape' | 'ghost';
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 16px;
  width: 100%;
  font-size: 14px;
  border: ${({ view }) => view === 'shape' ? '1px solid transparent' : '1px solid #9A9CFC'};
  background: ${({ view }) => view === 'shape' ? '#9A9CFC' : '#ffffff'};
  color: ${({ view }) => view === 'shape' ? '#ffffff' : '#9A9CFC'};
  border-radius: 8px;
  transition: background 0.2s;

  &:active {
    background: ${({ view }) => view === 'shape' ? '#8f91f6' : '#9A9CFC'};
    color: #ffffff;
  }
`;
