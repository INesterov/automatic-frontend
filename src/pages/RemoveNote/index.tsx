import React from 'react';
import { useMutation } from '@apollo/client';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { RemoveNote as RemoveNoteGQL, RemoveNoteVariables } from 'gql/types';
import { removeNoteMutation } from 'gql/mutations/removeNote.graphql';
import { H1, Button } from 'uikit';
import {
  Container,
  ButtonsWrap,
  Item
} from './styled';

export const RemoveNote = (): JSX.Element => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const [removeNote] = useMutation<RemoveNoteGQL, RemoveNoteVariables>(removeNoteMutation, {
    variables: {
      id: Number(id)
    }
  });

  const handleRemove = React.useCallback(async() => {
    await removeNote();

    navigate('/notes');
  }, [navigate, removeNote]);

  return (
    <Container>
      <H1 style={{ marginTop: '30%'}}>Вы уверены, что хотите удалить запись?</H1>
      <ButtonsWrap>
        <Item>
          <Button onClick={handleRemove}>
            Удалить
          </Button>
        </Item>
        <Link to={`/note/${id}`}>
          <Button view="ghost">
            Отмена
          </Button>
        </Link>
      </ButtonsWrap>
    </Container>
  );
};
