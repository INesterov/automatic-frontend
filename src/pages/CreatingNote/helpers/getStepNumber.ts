import { Steps } from '../types/steps';

export const getStepNumber = (step: Steps) => {
  switch (step) {
    case (Steps.STEP1): {
      return 1;
    }

    case (Steps.STEP2): {
      return 2;
    }

    case (Steps.STEP3): {
      return 3;
    }

    case (Steps.STEP4): {
      return 4;
    }

    case (Steps.STEP5): {
      return 5;
    }

    default: {
      return 1;
    }
  }
};

export const getStepLabel = (step: Steps) => {
  switch (step) {
    case (Steps.STEP1): {
      return 'Шаг 1 из 5';
    }

    case (Steps.STEP2): {
      return 'Шаг 2 из 5';
    }

    case (Steps.STEP3): {
      return 'Шаг 3 из 5';
    }

    case (Steps.STEP4): {
      return 'Шаг 4 из 5';
    }

    case (Steps.STEP5): {
      return 'Шаг 5 из 5';
    }

    default: {
      return '';
    }
  }
};
