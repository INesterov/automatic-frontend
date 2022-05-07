import React from 'react';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { H1 } from 'uikit';
import {
  Header as StyledHeader,
  Toolbar,
  ArrowButton,
  ToodayButton
} from './styled';

type Props = {
  cursorDate: Date;
  navigation: {
    toNext: () => void;
    toPrev: () => void;
    setToday: () => void;
    setDate: (date: Date) => void;
  }
}

export const Header = (props: Props): JSX.Element => {
  const {
    cursorDate,
    navigation
  } = props;

  return (
    <StyledHeader>
      <H1>{format(cursorDate, 'MM.yyyy', { locale: ruLocale })}</H1>
      <Toolbar>
        <ArrowButton onClick={navigation.toPrev}>
          <MdChevronLeft size={32} fill="#9090B1" />
        </ArrowButton>
        <ToodayButton onClick={navigation.setToday}>
          Сегодня
        </ToodayButton>
        <ArrowButton onClick={navigation.toNext}>
          <MdChevronRight size={32} fill="#9090B1" />
        </ArrowButton>
      </Toolbar>
    </StyledHeader>
  );
};
