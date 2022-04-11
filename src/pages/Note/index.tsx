import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { useQuery } from '@apollo/client';
import { Note as NoteGQL, NoteVariables } from 'gql/types';
import { noteQuery } from 'gql/queries/noteQuery.graphql';
import { MdChevronLeft, MdOutlineRemove } from 'react-icons/md';
import { H1, TextField } from 'uikit';
import {
  Container,
  Header,
  Content,
  Item
} from './styled';

export const Note = (): JSX.Element => {
  const params = useParams();
  const { id } = params;
  const { data } = useQuery<NoteGQL, NoteVariables>(noteQuery, {
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
        <MdOutlineRemove size={36} fill="#b21092" />
      </Header>
      <Content>
        <Item>
          <TextField label="Ситуация" value={data?.note.situation ?? ''} />
        </Item>
        <Item>
          <TextField label="Автоматическая мысль" value={data?.note.automaticThought ?? ''} />
        </Item>
        <Item>
          <TextField label="Эмоция" value={data?.note.emotion ?? ''} />
        </Item>
        <Item>
          <TextField label="Чувства" value={data?.note.senses ?? ''} />
        </Item>
        <Item>
          <TextField label="Телесная реакция" value={data?.note.bodilySensations ?? ''} />
        </Item>
        <Item>
          <TextField label="Поведение" value={data?.note.behavior ?? ''} />
        </Item>
        <Item>
          <TextField label="Уровень тревоги" value={String(data?.note.anxietyLevel) ?? ''} />
        </Item>
      </Content>
    </Container>
  );
};
