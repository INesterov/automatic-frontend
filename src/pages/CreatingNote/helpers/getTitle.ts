import { Steps } from '../types/steps';

export const getTitle = (step: Steps) => {
  switch (step) {
    case (Steps.STEP1): {
      return 'Опишите ситуацию';
    }

    case (Steps.STEP2): {
      return 'Опишите эмоции';
    }

    case (Steps.STEP3): {
      return 'Опишите телесные ощущения';
    }

    case (Steps.STEP4): {
      return 'Мысль';
    }

    case (Steps.STEP5): {
      return 'Ваше поведение';
    }

    case (Steps.STEP6): {
      return 'Уровень тревоги';
    }

    default: {
      return '';
    }
  }
};
