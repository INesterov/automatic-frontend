import styled from 'styled-components';
import { H1 } from 'uikit';

export const Container = styled.div`
  height: 100%;
  padding: 40px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormWrap = styled.div`
  margin-top: 24px;
`;

export const Title = styled(H1)`
  text-align: center;
  margin-bottom: 24px;
`;

export const InputWrap = styled.div`
  margin-bottom: 16px;
`;
