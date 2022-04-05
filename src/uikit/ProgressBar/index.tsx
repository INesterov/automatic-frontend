import React from 'react';
import { HelpText } from 'uikit';
import { ProgressRoot, ProgressIndicator } from './styled';

type Props = {
  label: string;
  steps: number;
  step: number;
}

export const ProgressBar = (props: Props): JSX.Element => {
  const { label, step, steps } = props;
  const width = (step * 100) / steps;

  return (
    <>
      <HelpText>{label}</HelpText>
      <ProgressRoot>
        <ProgressIndicator style={{ width: `${width}%` }} />
      </ProgressRoot>
    </>
  );
};
