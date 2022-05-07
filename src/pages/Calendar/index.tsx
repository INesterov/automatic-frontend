import React from 'react';
import { useCalendar } from '@h6s/calendar';
import { useQuery, useApolloClient } from '@apollo/client';
import { notesQuery } from 'gql/queries/notesQuery.graphql';
import { Notes, NotesVariables } from 'gql/types';
import { Header } from './components/Header';
import { DateTable } from './components/DateTable';
import {
  Container,
  Content
} from './styled';

export const Calendar = (): JSX.Element => {
  const { cursorDate, headers, body, navigation } = useCalendar({ defaultWeekStart: 1 });

  const { data } = useQuery<Notes, NotesVariables>(notesQuery, {
    variables: {
      searchText: ''
    }
  });
  const client = useApolloClient();

  React.useEffect(() => {
    client.refetchQueries({
      include: ['Notes']
    });
  }, [client]);

  const notesByDay = React.useMemo(() => {
    return data?.notes.map(note => new Date(note.createdAt)) ?? [];
  }, [data?.notes]);

  return (
    <Container>
      <Header cursorDate={cursorDate} navigation={navigation} />
      <Content>
        <DateTable headers={headers} body={body} notesByDay={notesByDay} />
      </Content>
    </Container>
  );
};
