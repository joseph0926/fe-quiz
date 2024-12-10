import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { ListItem } from '@/types/content.type';
import { Brain } from 'lucide-react';
import { hasQuiz, getQuizForChapter } from '@/lib/quiz';
import { QuizComponent } from '../quiz/quiz';
import Link from 'next/link';

export const ContentList = ({
  item,
  index,
  category,
}: {
  item: ListItem;
  index: string;
  category: string;
}) => {
  const depth = index.split('-').length - 1;
  const quiz = getQuizForChapter(category, item.id);
  const showQuiz = hasQuiz(category, item);

  return (
    <AccordionItem
      value={index}
      className={cn('w-full border-none', depth > 0 ? 'ml-4' : '')}
    >
      <AccordionTrigger
        className={`flex items-center justify-between rounded-md px-4 py-3 text-sm text-foreground transition-all duration-200 hover:bg-accent hover:no-underline data-[state=open]:text-primary dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-primary/90 dark:data-[state=open]:text-primary/90 md:text-base`}
      >
        <span>{item.title}</span>
        {showQuiz && (
          <Brain className="mr-2 h-4 w-4 text-primary dark:text-primary/90" />
        )}
      </AccordionTrigger>
      <AccordionContent className="w-full pt-2">
        <Accordion type="multiple" className="w-full space-y-2">
          <AccordionItem
            value={`${index}-content`}
            className="w-full border-none"
          >
            {item.children ? (
              <AccordionTrigger className="flex items-center justify-start gap-2 rounded-md px-4 py-2 text-sm transition-all hover:bg-accent hover:no-underline">
                학습 내용
              </AccordionTrigger>
            ) : (
              <Link
                href={`/contents/${category}/${item.id}`}
                className={`block w-full rounded-md px-4 py-2 text-sm transition-all hover:bg-accent hover:no-underline`}
              >
                학습 내용
              </Link>
            )}
            <AccordionContent className="space-y-1 pt-2">
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
                className={`flex items-center justify-start gap-2 rounded-md px-4 py-2 text-sm transition-all hover:bg-accent hover:no-underline`}
              >
                <Brain className="h-4 w-4 text-primary dark:text-primary/90" />
                학습 확인 퀴즈
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <QuizComponent quiz={quiz} />
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </AccordionContent>
    </AccordionItem>
  );
};
