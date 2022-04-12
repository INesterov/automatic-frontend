import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { Button } from 'uikit';
import jwt_decode from 'jwt-decode';
import { InputField } from 'form';
import { MdPerson, MdPassword } from 'react-icons/md';
import { User } from 'types/user';
import { useAuth } from 'context/auth';
import { Login, LoginVariables } from 'gql/types';
import { loginMutation } from 'gql/mutations/loginMutation.graphql';
import { saveTokens } from './helpers/tokens';
import { Container, FormWrap, Title, InputWrap } from './styled';
import { validate } from './validate';
import { FormState } from './types';

export const Auth = (): JSX.Element => {
  const [authError, setAuthError] = React.useState('');
  const [login] = useMutation<Login, LoginVariables>(loginMutation);
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogin = React.useCallback(async(values: FormState) => {
    const { data } = await login({ variables: values });

    if (data && data.login) {
      saveTokens(data.login);
      const { user } = jwt_decode(data.login.accessToken) as { user: User };

      auth.signin(user);
      navigate('/');
    } else {
      setAuthError('Неверный пароль');
    }
  }, [login, auth, navigate]);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      handleLogin(values);
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
            error={formik.errors.password || authError}
          />
        </InputWrap>
      </FormWrap>
      <Button onClick={formik.handleSubmit}>Войти</Button>
    </Container>
  );
};
