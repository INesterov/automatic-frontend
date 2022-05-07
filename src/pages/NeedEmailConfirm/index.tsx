import React from 'react';
import { H1, Button } from 'uikit';
import {
  Container,
  ButtonsWrap
} from './styled';

export const NeedEmailConfirm = (): JSX.Element => {
  const refresh = React.useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <Container>
      <H1 style={{ marginTop: '30%'}}>Подтвердите почту, перейдя по ссылке, отправленной на ваш эмэйл</H1>
      <ButtonsWrap>
        <Button onClick={refresh}>
          Обновить
        </Button>
      </ButtonsWrap>
    </Container>
  );
};
