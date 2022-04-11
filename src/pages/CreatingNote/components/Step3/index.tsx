import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setValue } from 'store/creatingNote';
import { Textarea } from 'uikit';

export const Step3 = (): JSX.Element => {
  const dispatch = useDispatch();
  const bodilySensations = useSelector((state: RootState) => state.creatingNote.bodilySensations);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value as never;

    dispatch(setValue({ name: 'bodilySensations', value }));
  }, [dispatch]);

  return (
    <Textarea rows={5} placeholder="Телесные ощущения" value={bodilySensations} onChange={handleChange} />
  );
};
