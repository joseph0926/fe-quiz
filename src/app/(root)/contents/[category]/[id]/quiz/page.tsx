import { notFound } from "next/navigation";
import { CodeQuiz } from "@/components/quiz/code-quiz";
import { codeQuizzes as tsQuiz2 } from "@/constants/typescript/code-quiz/02";

const quizMap = {
  typescript: {
    "02": tsQuiz2,
  },
} as const;

export default async function QuizPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category, id } = await params;

  const categoryQuizzes = quizMap[category as keyof typeof quizMap];
  if (!categoryQuizzes) {
    notFound();
  }

  const quizzes = categoryQuizzes[id as keyof typeof categoryQuizzes];
  if (!quizzes) {
    notFound();
  }

  return <CodeQuiz category={category} codeQuizzes={quizzes} />;
}
