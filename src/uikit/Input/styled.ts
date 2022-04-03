import styled from 'styled-components';

type IconWrapProps = {
  position?: 'left' | 'right';
}

export const StyledInput = styled.input<IconWrapProps>`
  width: 100%;
  padding: 16px;
  font-size: 14px;
  ${({ position }) => position === 'left' && 'padding-left: 40px;'}
  ${({ position }) => position === 'right' && 'padding-right: 40px;'}
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: #EFEFFA;
  color: #9090B1;
  outline: transparent;
  transition: border 0.3s;

  &:focus {
    border: 1px solid #9A9CFC;
  } 
`;

export const Container = styled.div`
  position: relative;
`;

export const IconWrap = styled.div<IconWrapProps>`
  position: absolute;
  top: 0;
  ${({ position }) => position === 'left' ? 'left: 16px;' : 'right: 16px;'}
  height: 100%;
  display: flex;
  align-items: center;
`;

