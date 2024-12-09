"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ChevronRight, ChevronLeft, Check, X } from "lucide-react";
import { Quiz } from "@/types/quiz.type";

type AnswerRecord = Record<string, number>;

export function QuizComponent({ quiz }: { quiz: Quiz }) {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord>({});

  const category = quiz.categories[currentCategory];
  const question = category.questions[currentQuestion];
  const progress = (Object.keys(answers).length / getTotalQuestions()) * 100;

  function getTotalQuestions() {
    return quiz.categories.reduce(
      (total, cat) => total + cat.questions.length,
      0
    );
  }

  function handleAnswer() {
    if (selectedAnswer === null) return;

    setAnswers({
      ...answers,
      [`${currentCategory}-${currentQuestion}`]: selectedAnswer,
    });
    setShowExplanation(true);
  }

  function handleNext() {
    setSelectedAnswer(null);
    setShowExplanation(false);

    if (currentQuestion < category.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentCategory < quiz.categories.length - 1) {
      setCurrentCategory(currentCategory + 1);
      setCurrentQuestion(0);
    }
  }

  function handlePrevious() {
    setSelectedAnswer(null);
    setShowExplanation(false);

    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentCategory > 0) {
      setCurrentCategory(currentCategory - 1);
      setCurrentQuestion(
        quiz.categories[currentCategory - 1].questions.length - 1
      );
    }
  }

  function getScore() {
    let correct = 0;
    Object.entries(answers).forEach(([key, value]) => {
      const [catIndex, qIndex] = key.split("-");
      if (
        quiz.categories[Number(catIndex)].questions[Number(qIndex)]
          .correctAnswer === value
      ) {
        correct++;
      }
    });
    return correct;
  }

  const isFirstQuestion = currentCategory === 0 && currentQuestion === 0;
  const isLastQuestion =
    currentCategory === quiz.categories.length - 1 &&
    currentQuestion === category.questions.length - 1;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Progress value={progress} className="mb-8" />

      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </div>
            <span className="text-sm text-muted-foreground">
              {getScore()}/{Object.keys(answers).length} 정답
            </span>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            <div className="text-lg font-medium">
              {currentQuestion + 1}. {question.question}
            </div>

            <RadioGroup
              value={selectedAnswer?.toString()}
              onValueChange={(value) => setSelectedAnswer(Number(value))}
              className="space-y-3"
            >
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 p-3 rounded-lg border ${
                    showExplanation
                      ? index === question.correctAnswer
                        ? "border-green-500 bg-green-50 dark:bg-green-950"
                        : index === selectedAnswer
                        ? "border-red-500 bg-red-50 dark:bg-red-950"
                        : "border-transparent"
                      : "hover:bg-accent"
                  }`}
                >
                  <RadioGroupItem
                    value={index.toString()}
                    id={`option-${index}`}
                    disabled={showExplanation}
                  />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-grow cursor-pointer"
                  >
                    {option}
                  </Label>
                  {showExplanation && index === question.correctAnswer && (
                    <Check className="w-4 h-4 text-green-500" />
                  )}
                  {showExplanation &&
                    index === selectedAnswer &&
                    index !== question.correctAnswer && (
                      <X className="w-4 h-4 text-red-500" />
                    )}
                </div>
              ))}
            </RadioGroup>

            {showExplanation && (
              <Alert>
                <AlertDescription>{question.explanation}</AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={isFirstQuestion}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            이전
          </Button>

          {!showExplanation ? (
            <Button onClick={handleAnswer} disabled={selectedAnswer === null}>
              정답 확인
            </Button>
          ) : (
            <Button onClick={handleNext} disabled={isLastQuestion}>
              다음
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
