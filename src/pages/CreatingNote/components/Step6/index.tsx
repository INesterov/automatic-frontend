import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setValue } from 'store/creatingNote';
import { Slider } from 'uikit';

export const Step6 = (): JSX.Element => {
  const dispatch = useDispatch();
  const anxietyLevel = useSelector((state: RootState) => state.creatingNote.anxietyLevel);

  const handleChange = React.useCallback((value: number[]) => {
    const newValue = value[0] as never;
    dispatch(setValue({ name: 'anxietyLevel', value: newValue }));
  }, [dispatch]);

  return (
    <Slider
      defaultValue={[anxietyLevel]}
      max={10}
      step={1}
      label="Уровень тревоги"
      onChange={handleChange}
    />
  );
};
