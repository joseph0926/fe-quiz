import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Code2, AlertTriangle } from "lucide-react";
import { Fragment } from "react";

type ContentViewProps = {
  title: string;
  content: string;
};

export function ContentView({ title, content }: ContentViewProps) {
  const codeBlockRegex = /```[\s\S]*?```/g;
  const contentParts = content.split(codeBlockRegex);
  const codeBlocks = content.match(codeBlockRegex) || [];

  return (
    <div className="h-[calc(100vh-2rem)] w-full">
      <Card className="border-none shadow-none">
        <CardContent className="pt-6">
          <h1 className="text-3xl font-bold mb-8 text-foreground/90">
            {title}
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            {contentParts.map((part, index) => (
              <Fragment key={index}>
                <div className="text-foreground/80 leading-7 mb-6">
                  {part.split("\n\n").map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {codeBlocks[index] && (
                  <div className="my-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 className="h-4 w-4 text-primary/80" />
                      <span className="text-sm text-primary/80">예제 코드</span>
                    </div>
                    <pre className="relative rounded-lg bg-slate-950 dark:bg-slate-900 p-4 overflow-x-auto">
                      <code className="text-sm font-mono text-slate-50">
                        {codeBlocks[index].replace(/```/g, "").trim()}
                      </code>
                    </pre>
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          {content.includes("Try") && (
            <Alert className="my-6 border-primary/20 bg-primary/5">
              <AlertTriangle className="h-4 w-4 text-primary" />
              <AlertDescription className="text-sm text-primary/80">
                직접 코드를 작성하고 실행해보세요!
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}