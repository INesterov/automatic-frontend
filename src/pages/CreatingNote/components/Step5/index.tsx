import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setValue } from 'store/creatingNote';
import { Textarea } from 'uikit';

export const Step5 = (): JSX.Element => {
  const dispatch = useDispatch();
  const behavior = useSelector((state: RootState) => state.creatingNote.behavior);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value as never;

    dispatch(setValue({ name: 'behavior', value }));
  }, [dispatch]);

  return (
    <Textarea rows={5} placeholder="Поведение" value={behavior} onChange={handleChange} />
  );
};
