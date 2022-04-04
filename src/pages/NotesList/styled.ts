import styled from 'styled-components';
import { Text } from 'uikit';

export const Container = styled.div`
  height: 100%;
`;

export const Header = styled.div`
  height: 48px;
  border-bottom: 1px solid #DCDCF5;
  padding: 16px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  padding: 16px;
  margin-bottom: 94px;
`;

export const NoNotesText = styled(Text)`
  text-align: center;
`;
