import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setValue } from 'store/creatingNote';
import { Input } from 'uikit';
import { InputWrap } from './styled';

export const Step2 = (): JSX.Element => {
  const dispatch = useDispatch();
  const emotion = useSelector((state: RootState) => state.creatingNote.emotion);
  const senses = useSelector((state: RootState) => state.creatingNote.senses);

  const handleChangeEmotion = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as never;

    dispatch(setValue({ name: 'emotion', value }));
  }, [dispatch]);

  const handleChangeSenses = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as never;

    dispatch(setValue({ name: 'senses', value }));
  }, [dispatch]);

  return (
    <>
      <InputWrap>
        <Input value={emotion} placeholder="Эмоции" onChange={handleChangeEmotion} />
      </InputWrap>
      <Input value={senses} placeholder="Чувства" onChange={handleChangeSenses} />
    </>
  );
};
