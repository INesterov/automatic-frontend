import { Steps } from '../types/steps';

export const getBackLink = (step: Steps) => {
  switch (step) {
    case (Steps.STEP1): {
      return '/notes';
    }

    case (Steps.STEP2): {
      return '/create/step-1';
    }

    case (Steps.STEP3): {
      return '/create/step-2';
    }

    case (Steps.STEP4): {
      return '/create/step-3';
    }

    case (Steps.STEP5): {
      return '/create/step-4';
    }

    default: {
      return '/notes';
    }
  }
};
