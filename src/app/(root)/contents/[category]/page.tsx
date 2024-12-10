import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { listData } from "@/constants/contents/list";
import { Accordion } from "@/components/ui/accordion";
import { ContentList } from "@/components/contents/content-list";
import { BookOpen } from "lucide-react";

export default async function ContentsPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <Card className="w-full max-w-4xl mx-auto border-none dark:bg-gray-900">
        <CardHeader className="space-y-4">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary dark:text-primary/90" />
            <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 dark:from-primary/90 dark:to-primary/50 bg-clip-text text-transparent">
              <span className="text-primary capitalize">{category}</span>{" "}
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
