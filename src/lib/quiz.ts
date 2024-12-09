import { Quiz } from "@/types/quiz.type";
import { TOCItem } from "@/types/content.type";
import { typeScriptQuizOne } from "@/constants/typescript/quiz/01";
import { typeScriptQuizTwo } from "@/constants/typescript/quiz/02";

export function calculateQuizScore(
  userAnswers: number[],
  quiz: Quiz
): {
  score: number;
  totalQuestions: number;
  percentage: number;
} {
  let correctAnswers = 0;
  const totalQuestions = userAnswers.length;

  userAnswers.forEach((answer, index) => {
    const question = quiz.categories
      .flatMap((category) => category.questions)
      .find((q) => q.id === index + 1);

    if (question && answer === question.correctAnswer) {
      correctAnswers++;
    }
  });

  return {
    score: correctAnswers,
    totalQuestions,
    percentage: (correctAnswers / totalQuestions) * 100,
  };
}

export const chapterQuizzes: Record<string, Quiz> = {
  "01": typeScriptQuizOne,
  "02": typeScriptQuizTwo,
};

export function getQuizForChapter(chapterId: string): Quiz {
  return chapterQuizzes[chapterId];
}

export function hasQuiz(item: TOCItem): boolean {
  return item.id in chapterQuizzes;
}

export function getAllQuizzes(): Quiz[] {
  return Object.values(chapterQuizzes);
}

export function addQuizToTOC(item: TOCItem): TOCItem {
  const newItem = { ...item };

  if (hasQuiz(item)) {
    const quizSection: TOCItem = {
      id: `${item.id}_quiz`,
      title: "학습 확인 퀴즈",
      isQuiz: true,
    };

    newItem.children = item.children
      ? [...item.children, quizSection]
      : [quizSection];
  }

  if (newItem.children) {
    newItem.children = newItem.children.map((child) => addQuizToTOC(child));
  }

  return newItem;
}
