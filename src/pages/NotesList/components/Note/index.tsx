import React from 'react';
import { Text } from 'uikit';
import { Container, DateText } from './styled';

type Props = {
  text: string;
  date: string;
}

export const Note = (props: Props): JSX.Element => {
  const {
    text,
    date
  } = props;

  return (
    <Container>
      <Text>{text}</Text>
      <DateText>{date}</DateText>
    </Container>
  );
};
