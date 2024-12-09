import { Quiz } from "@/types/quiz.type";

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
