import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from 'uikit';
import { format, isSameDay, getUnixTime, addDays } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import {
  Table,
  Td,
  Day
} from './styled';

type Props = {
  notesByDay: Date[];
  headers: {
    weekDays: ({
        value: Date;
    } & {
        key: string;
    })[];
  };
  body: {
    value: {
        key: string;
        value: ({
            value: Date;
        } & {
            date: number;
            isCurrentMonth: boolean;
            isCurrentDate: boolean;
            isWeekend: boolean;
        } & {
            key: string;
        })[];
    }[];
  } | {
      value: {
          key: string;
          value: ({
              value: Date;
          } & {
              date: number;
              isCurrentMonth: boolean;
              isCurrentDate: boolean;
              isWeekend: boolean;
          } & {
              key: string;
          })[];
      }[];
  } | {
      value: {
          key: string;
          value: ({
              value: Date;
          } & {
              date: number;
              isCurrentMonth: boolean;
              isCurrentDate: boolean;
              isWeekend: boolean;
          } & {
              key: string;
          })[];
      }[];
  };
}

export const DateTable = (props: Props): JSX.Element => {
  const {
    headers,
    body,
    notesByDay
  } = props;

  return (
    <Table>
      <thead>
        <tr>
            {headers.weekDays.map(({ key, value }) => {
              return (
                <th key={key} data-testid="calendar-weekends">
                  <Text>
                    {format(value, 'E', { locale: ruLocale })}
                  </Text>
                </th>
              );
            })}
          </tr>
      </thead>
      <tbody>
        {body.value.map(week => {
          const { key, value: days } = week;

          return (
            <tr key={key} data-testid="calendar-weeks">
              {days.map(day => {
                const {
                  key,
                  date,
                  isCurrentMonth,
                  isWeekend,
                  value
                } = day;

                const isHaveNote = notesByDay.some(noteDate => isSameDay(noteDate, value));

                return (
                  <Td
                    key={key}
                    style={{ opacity: isCurrentMonth ? 1 : 0.2}}
                  >
                    <Link to={`/notes/${getUnixTime(addDays(value, 1))}`} style={{ textDecoration: 'none' }}>
                      <Day isWeekend={isWeekend} isHaveNote={isHaveNote}>
                        {date}
                      </Day>
                    </Link>
                  </Td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
