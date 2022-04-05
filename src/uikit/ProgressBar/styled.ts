import styled from 'styled-components';
import * as Progress from '@radix-ui/react-progress';

export const ProgressRoot = styled(Progress.Root)`
  height: 10px;
  border-radius: 4px;
  background-color: #DCDCF5;
  margin-top: 16px;
`;

export const ProgressIndicator = styled(Progress.Indicator)`
  background-color: #9A9CFC;
  height: 10px;
  border-radius: 4px;
`;
