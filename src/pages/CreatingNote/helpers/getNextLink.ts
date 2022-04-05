import { Steps } from '../types/steps';

export const getNextLink = (step: Steps) => {
  switch (step) {
    case (Steps.STEP1): {
      return '/create/step-2';
    }

    case (Steps.STEP2): {
      return '/create/step-3';
    }

    case (Steps.STEP3): {
      return '/create/step-4';
    }

    case (Steps.STEP4): {
      return '/create/step-5';
    }

    default: {
      return '/notes';
    }
  }
};
