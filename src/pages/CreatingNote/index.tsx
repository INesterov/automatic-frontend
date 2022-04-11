import React from 'react';
import { useMutation } from '@apollo/client';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdChevronLeft } from 'react-icons/md';
import { ProgressBar, Button } from 'uikit';
import { RootState } from 'store';
import { reset } from 'store/creatingNote';
import { CreateNote, CreateNoteVariables } from 'gql/types';
import { createNoteMutation } from 'gql/mutations/createNoteMutation.graphql';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { Step4 } from './components/Step4';
import { Step5 } from './components/Step5';
import { Step6 } from './components/Step6';
import { getBackLink } from './helpers/getBackLink';
import { getTitle } from './helpers/getTitle';
import { getStepNumber, getStepLabel } from './helpers/getStepNumber';
import { getNextLink } from './helpers/getNextLink';
import { Steps } from './types/steps';
import {
  Container,
  Toolbar,
  Title,
  ContentWrap,
  ButtonWrap,
  Content
} from './styled';

export const CreatingNote = (): JSX.Element => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createNote] = useMutation<CreateNote, CreateNoteVariables>(createNoteMutation);
  const newNote = useSelector((state: RootState) => state.creatingNote);
  const { step } = params;
  const stepsMap = {
    'step-1': <Step1 />,
    'step-2': <Step2 />,
    'step-3': <Step3 />,
    'step-4': <Step4 />,
    'step-5': <Step5 />,
    'step-6': <Step6 />
  };

  const saveNewNote = React.useCallback(async() => {
    const { anxietyLevel, ...restParams } = newNote;
    const note = { ...restParams, anxietyLevel: String(anxietyLevel) };
    const { data } = await createNote({ variables: {
      note
    } });

    if (data?.createNote.id) {
      dispatch(reset());
      navigate('/notes');
    }
  }, [createNote, navigate, newNote, dispatch]);

  return (
    <Container>
      <Content>
        <Toolbar>
          <Link to={getBackLink(step as Steps)}>
            <MdChevronLeft size={36} fill="#9090B1" />
          </Link>
        </Toolbar>
        <Title>{getTitle(step as Steps)}</Title>
        <ProgressBar
          step={getStepNumber(step as Steps)}
          steps={5}
          label={getStepLabel(step as Steps)}
        />
        <ContentWrap>{stepsMap[step as Steps]}</ContentWrap>
      </Content>
      {step === Steps.STEP6 ? (
        <ButtonWrap>
          <Button onClick={saveNewNote}>Сохранить</Button>
        </ButtonWrap>
      ) : (
        <ButtonWrap>
          <Link to={getNextLink(step as Steps)}>
            <Button>Продолжить</Button>
          </Link>
        </ButtonWrap>
      )}
    </Container>
  );
};
