import React from 'react';
import {
  Label,
  Value,
  ValueWrap,
  Container
} from './styled';

type Props = {
  label: string;
  value: string;
}

export const TextField = (props: Props): JSX.Element => {
  const { label, value } = props;

  return (
    <Container>
      <Label>{label}:</Label>
      <ValueWrap>
        <Value>{value}</Value>
      </ValueWrap>
    </Container>
  );
};
