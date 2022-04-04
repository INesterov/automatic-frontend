import styled from 'styled-components';
import { HelpText } from 'uikit';

export const Container = styled.div`
  padding: 8px;
  border-radius: 8px;
  background-color: #E7E7FC;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DateText = styled(HelpText)`
  margin-top: 8px;
`;
