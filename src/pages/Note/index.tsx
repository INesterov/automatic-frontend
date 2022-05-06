import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { useQuery } from '@apollo/client';
import { Note as NoteGQL, NoteVariables } from 'gql/types';
import { noteQuery } from 'gql/queries/noteQuery.graphql';
import { MdChevronLeft } from 'react-icons/md';
import { VscTrash } from 'react-icons/vsc';
import { H1, TextField } from 'uikit';
import { Skeleton } from './components/Skeleton';
import {
  Container,
  Header,
  Content,
  Item
} from './styled';

export const Note = (): JSX.Element => {
  const params = useParams();
  const { id } = params;
  const { data, loading } = useQuery<NoteGQL, NoteVariables>(noteQuery, {
    variables: {
      id: Number(id)
    }
  });

  const date = data?.note?.createdAt ? new Date(data?.note?.createdAt) : new Date();
  const dateFormatted = format(date, 'dd MMM yyy', { locale: ruLocale });

  return (
    <Container>
      <Header>
        <Link to="/notes">
          <MdChevronLeft size={36} fill="#9090B1" />
        </Link>
        <H1>{dateFormatted}</H1>
        <Link to={`/note/${id}/remove`}>
          <VscTrash size={24} fill="#9090B1" />
        </Link>
      </Header>
      <Content>
        {loading && (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
        {!loading && (
          <>
            {data?.note.situation && (
              <Item>
                <TextField label="Ситуация" value={data?.note.situation ?? ''} />
              </Item>
            )}
            {data?.note.automaticThought && (
              <Item>
                <TextField label="Мысль" value={data?.note.automaticThought ?? ''} />
              </Item>
            )}
            {data?.note.emotion && (
              <Item>
                <TextField label="Эмоция" value={data?.note.emotion ?? ''} />
              </Item>
            )}
            {data?.note.bodilySensations && (
              <Item>
                <TextField label="Чувства" value={data?.note.senses ?? ''} />
              </Item>
            )}
            {data?.note.situation && (
              <Item>
                <TextField label="Телесная реакция" value={data?.note.bodilySensations ?? ''} />
              </Item>
            )}
            {data?.note.behavior && (
              <Item>
                <TextField label="Поведение" value={data?.note.behavior ?? ''} />
              </Item>
            )}
            {data?.note.anxietyLevel && (
              <Item>
                <TextField label="Уровень тревоги" value={String(data?.note.anxietyLevel) ?? ''} />
              </Item>
            )}
          </>
        )}
      </Content>
    </Container>
  );
};
