import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { TOCItem } from "@/types/content.type";
import { Brain } from "lucide-react";
import { hasQuiz, getQuizForChapter } from "@/lib/quiz";
import { QuizComponent } from "../quiz/quiz";
import Link from "next/link";

export const ContentList = ({
  item,
  index,
  category,
}: {
  item: TOCItem;
  index: string;
  category: string;
}) => {
  const depth = index.split("-").length - 1;
  const quiz = getQuizForChapter(item.id);
  const showQuiz = hasQuiz(item);

  return (
    <AccordionItem
      value={index}
      className={cn("border-none w-full", depth > 0 ? "ml-4" : "")}
    >
      <AccordionTrigger
        className={`
          py-3
          px-4
          hover:bg-accent
          hover:no-underline
          rounded-md
          transition-all
          duration-200
          text-sm
          md:text-base
          text-foreground
          dark:text-gray-200
          dark:hover:bg-gray-800
          dark:hover:text-primary/90
          data-[state=open]:text-primary
          dark:data-[state=open]:text-primary/90
          flex
          justify-between
          items-center
        `}
      >
        <span>{item.title}</span>
        {showQuiz && (
          <Brain className="h-4 w-4 text-primary dark:text-primary/90 mr-2" />
        )}
      </AccordionTrigger>
      <AccordionContent className="pt-2 w-full">
        <Accordion type="multiple" className="w-full space-y-2">
          <AccordionItem
            value={`${index}-content`}
            className="w-full border-none"
          >
            <Link
              href={`/contents/${category}/${item.id}`}
              className={`
                block
                w-full
                py-2
                px-4
                hover:bg-accent
                hover:no-underline
                rounded-md
                text-sm
                transition-all
              `}
            >
              학습 내용
            </Link>
            <AccordionContent className="pt-2 space-y-1">
              {item.children?.map((child, childIndex) => (
                <ContentList
                  category={category}
                  key={childIndex}
                  item={child}
                  index={`${index}-${childIndex}`}
                />
              ))}
            </AccordionContent>
          </AccordionItem>

          {showQuiz && (
            <AccordionItem value={`${index}-quiz`} className="border-none">
              <AccordionTrigger
                className={`
                  py-2
                  px-4
                  hover:bg-accent
                  hover:no-underline
                  rounded-md
                  text-sm
                  transition-all
                  flex
                  items-center
                  justify-start
                  gap-2
                `}
              >
                <Brain className="h-4 w-4 text-primary dark:text-primary/90" />
                학습 확인 퀴즈
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <div className="px-4">
                  <QuizComponent quiz={quiz} />
                </div>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </AccordionContent>
    </AccordionItem>
  );
};
