import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import ruLocale from 'date-fns/locale/ru';
import { useQuery, useApolloClient } from '@apollo/client';
import { Skeleton } from 'uikit';
import { notesQuery } from 'gql/queries/notesQuery.graphql';
import { Notes } from 'gql/types';
import { Header } from './components/Header';
import { Note } from './components/Note';
import {
  Container,
  Content,
  NoNotesText,
  Item
} from './styled';

export const NotesList = (): JSX.Element => {
  const { data, loading } = useQuery<Notes, void>(notesQuery);
  const client = useApolloClient();

  React.useEffect(() => {
    client.refetchQueries({
      include: ['Notes']
    });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        {loading && (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
        {!loading && data?.notes && data.notes.length > 0 && data.notes.map(note => {
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

        {!loading && data?.notes.length === 0 && (
          <NoNotesText>Нет записей</NoNotesText>
        )}
      </Content>
    </Container>
  );
};
