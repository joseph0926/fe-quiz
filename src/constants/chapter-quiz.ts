import {
  typeScriptQuizOne,
  typeScriptQuizTwo,
  typeNarrowingQuiz,
  functionTypesQuiz,
  objectTypesQuiz,
  genericsQuiz,
  typeOperatorsQuiz,
  advancedTypesQuiz,
  templateLiteralQuiz,
} from "@/constants/typescript/quiz";
import { Quiz } from "@/types/quiz.type";

export const chapterQuizzes: Record<string, Record<string, Quiz>> = {
  typescript: {
    "01": typeScriptQuizOne,
    "02": typeScriptQuizTwo,
    "03": typeNarrowingQuiz,
    "04": functionTypesQuiz,
    "05": objectTypesQuiz,
    "06_1": genericsQuiz,
    "06_2": typeOperatorsQuiz,
    "06_3": advancedTypesQuiz,
    "06_4": templateLiteralQuiz,
  },
};
