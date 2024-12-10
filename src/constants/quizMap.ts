import {
  tsQuiz2,
  tsQuiz3,
  tsQuiz4,
  tsQuiz5,
  tsQuiz6_1,
  tsQuiz6_2,
  tsQuiz6_3,
  tsQuiz6_4,
} from "./typescript/code-quiz";

export const quizMap = {
  typescript: {
    "02": tsQuiz2,
    "03": tsQuiz3,
    "04": tsQuiz4,
    "05": tsQuiz5,
    "06_1": tsQuiz6_1,
    "06_2": tsQuiz6_2,
    "06_3": tsQuiz6_3,
    "06_4": tsQuiz6_4,
  },
} as const;
