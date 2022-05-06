import React from 'react';
import { PasswordInput, InputProps } from 'uikit';
import { Container, ErrorMessage } from './styled';

type Props = InputProps & {
  error?: string;
}

export const PasswordField = (props: Props): JSX.Element => {
  const { error, ...restProps } = props;

  return (
    <Container>
      <PasswordInput {...restProps} />
      {error && (
        <ErrorMessage>{error}</ErrorMessage>
      )}
    </Container>
  );
};
