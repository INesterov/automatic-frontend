import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setValue } from 'store/creatingNote';
import { Textarea } from 'uikit';

export const Step4 = (): JSX.Element => {
  const dispatch = useDispatch();
  const automaticThought = useSelector((state: RootState) => state.creatingNote.automaticThought);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value as never;

    dispatch(setValue({ name: 'automaticThought', value }));
  }, [dispatch]);

  return (
    <Textarea rows={5} placeholder="Мысль" value={automaticThought} onChange={handleChange} />
  );
};
