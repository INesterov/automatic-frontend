/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { HelpText } from 'uikit';

export const Table = styled.table`
  width: 100%;
  user-select: none;
  height: 300px;
`;

export const Td = styled.td`
  text-align: center;
  user-select: none;
`;

type DayProps = {
  isWeekend: boolean;
  isHaveNote: boolean;
}

export const Day = styled(HelpText)`
  ${({ isHaveNote }) => isHaveNote && `
    background-color: #E7E7FC;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  `};
  // eslint-disable-next-line no-nested-ternary
  color: ${({ isWeekend, isHaveNote }: DayProps) => isWeekend ? '#ff5454' : '#AFAFC7'};
`;
