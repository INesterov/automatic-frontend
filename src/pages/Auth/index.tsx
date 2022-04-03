import React from 'react';
import { Input } from 'uikit';
import { MdPerson, MdPassword } from 'react-icons/md';
import { Container, FormWrap, Title, InputWrap } from './styled';

export const Auth = (): JSX.Element => {
  return (
    <Container>
      <FormWrap>
        <Title>Вход</Title>
        <InputWrap>
          <Input placeholder="Email" icon={MdPerson} iconPosition="left" type="email" />
        </InputWrap>
        <InputWrap>
          <Input placeholder="Пароль" icon={MdPassword} iconPosition="left" type="password" />
        </InputWrap>
      </FormWrap>
    </Container>
  );
};
