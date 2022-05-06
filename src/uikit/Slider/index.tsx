import React from 'react';
import { HelpText } from 'uikit';
import {
  StyledSlider,
  StyledTrack,
  StyledRange,
  StyledThumb,
  Labels
} from './styled';

type Props = {
  defaultValue?: number[];
  max?: number;
  step?: number;
  label?: string;
  onChange?: (value: number[]) => void;
}

export const Slider = (props: Props): JSX.Element => {
  const {
    defaultValue,
    max,
    step,
    label,
    onChange
  } = props;

  return (
    <>
      <StyledSlider
        defaultValue={defaultValue}
        max={max}
        step={step}
        aria-label={label}
        onValueChange={onChange}
      >
        <StyledTrack>
          <StyledRange />
        </StyledTrack>
        <StyledThumb>
          {defaultValue}
        </StyledThumb>
      </StyledSlider>
      {max && (
        <Labels>
          <HelpText>0</HelpText>
          <HelpText>{max}</HelpText>
        </Labels>
      )}
    </>
  );
};
