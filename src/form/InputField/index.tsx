import React from 'react';
import { Input, InputProps } from 'uikit';
import { Container, ErrorMessage } from './styled';

type Props = InputProps & {
  error?: string;
}

export const InputField = (props: Props): JSX.Element => {
  const { error, ...restProps } = props;

  return (
    <Container>
      <Input {...restProps} />
      {error && (
        <ErrorMessage>{error}</ErrorMessage>
      )}
    </Container>
  );
};
