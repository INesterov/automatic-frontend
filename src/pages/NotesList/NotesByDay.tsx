import React from 'react';
import { format, fromUnixTime } from 'date-fns';
import { Link } from 'react-router-dom';
import ruLocale from 'date-fns/locale/ru';
import { useParams } from 'react-router-dom';
import { useQuery, useApolloClient } from '@apollo/client';
import { Skeleton } from 'uikit';
import { notesByDay } from 'gql/queries/notesByDay.graphql';
import { NotesByDay as NotesByDayType, NotesByDayVariables } from 'gql/types';
import { Header } from './components/Header';
import { Note } from './components/Note';
import {
  Container,
  Content,
  NoNotesText,
  Item
} from './styled';

export const NotesByDay = (): JSX.Element => {
  const params = useParams();
  const { date } = params;
  const selectedDate = fromUnixTime(Number(date));

  const { data, loading } = useQuery<NotesByDayType, NotesByDayVariables>(notesByDay, {
    variables: {
      time: Number(date)
    }
  });
  const client = useApolloClient();

  React.useEffect(() => {
    client.refetchQueries({
      include: ['NotesByDay']
    });
  }, [client]);

  return (
    <Container>
      <Header title={format(selectedDate, 'dd.MM.yyy')} />
      <Content>
        {loading && (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
        {!loading && data?.notesByDay && data.notesByDay.length > 0 && data.notesByDay.map(note => {
          const dateString = format(new Date(note.createdAt), 'dd MMM yyy', { locale: ruLocale });

          return (
            <Item>
              <Link key={note.id} to={`/note/${note.id}`} style={{ textDecoration: 'none' }}>
                <Note
                  text={note.situation}
                  date={dateString}
                />
              </Link>
            </Item>
          );
        })}

        {!loading && data?.notesByDay.length === 0 && (
          <NoNotesText>Нет записей</NoNotesText>
        )}
      </Content>
    </Container>
  );
};
