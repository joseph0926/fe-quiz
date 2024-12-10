import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { listData } from '@/constants/contents/list';
import { Accordion } from '@/components/ui/accordion';
import { ContentList } from '@/components/contents/content-list';
import { BookOpen } from 'lucide-react';

export default async function ContentsPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  return (
    <div className="container mx-auto min-h-screen p-4">
      <Card className="mx-auto w-full max-w-4xl border-none dark:bg-gray-900">
        <CardHeader className="space-y-4">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary dark:text-primary/90" />
            <CardTitle className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-2xl font-bold text-transparent dark:from-primary/90 dark:to-primary/50 md:text-3xl">
              <span className="capitalize text-primary">{category}</span>{' '}
              Handbook
            </CardTitle>
          </div>
          <p className="text-sm text-muted-foreground dark:text-gray-400">
            Complete guide to {category} with interactive examples and quizzes
          </p>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full transition-all">
            {listData.title === category &&
              listData.children?.map((item, index) => (
                <ContentList
                  key={index}
                  category={category}
                  item={item}
                  index={index.toString()}
                />
              ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
