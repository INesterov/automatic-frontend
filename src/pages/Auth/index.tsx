import React from 'react';
import { useFormik } from 'formik';
import { Button } from 'uikit';
import { InputField } from 'form';
import { MdPerson, MdPassword } from 'react-icons/md';
import { Container, FormWrap, Title, InputWrap } from './styled';
import { validate } from './validate';

export const Auth = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values);
    },
    validate
  });

  return (
    <Container>
      <FormWrap>
        <Title>Вход</Title>
        <InputWrap>
          <InputField
            placeholder="Email"
            icon={MdPerson}
            iconPosition="left"
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
          />
        </InputWrap>
        <InputWrap>
          <InputField
            placeholder="Пароль"
            icon={MdPassword}
            iconPosition="left"
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.password}
          />
        </InputWrap>
      </FormWrap>
      <Button onClick={formik.handleSubmit}>Войти</Button>
    </Container>
  );
};
