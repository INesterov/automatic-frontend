import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setValue } from 'store/creatingNote';
import { Textarea } from 'uikit';

export const Step1 = (): JSX.Element => {
  const dispatch = useDispatch();
  const situation = useSelector((state: RootState) => state.creatingNote.situation);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    dispatch(setValue({ name: 'situation', value }));
  }, [dispatch]);

  return (
    <Textarea rows={5} placeholder="Ситуация" value={situation} onChange={handleChange} />
  );
};
