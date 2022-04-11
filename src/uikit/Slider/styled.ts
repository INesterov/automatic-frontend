import styled from 'styled-components';
import * as SliderPrimitive from '@radix-ui/react-slider';

export const StyledSlider = styled(SliderPrimitive.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 100%;

  & [data-orientation="horizontal"] {
    height: 10px;
  }

  & [data-orientation="vertical"] {
    flex-direction: column;
    width: 10px;
    height: 100px;
  }
`;

export const StyledTrack = styled(SliderPrimitive.Track)`
  background-color: #DCDCF5;
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
`;

export const StyledRange = styled(SliderPrimitive.Range)`
  position: absolute;
  background-color: #9A9CFC;
  border-radius: 9999px;
  height: 100%;
`;

export const StyledThumb = styled(SliderPrimitive.Thumb)`
  all: unset;
  display: block;
  width: 20px;
  height: 20px!important;
  background-color: #9A9CFC;
  box-shadow: 0 2px 10px #DCDCF5;
  border-radius: 10px;
`;

export const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;
