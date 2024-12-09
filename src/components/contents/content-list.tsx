import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { TOCItem } from "@/types/content.type";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const ContentList = ({
  item,
  index,
}: {
  item: TOCItem;
  index: string;
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const depth = index.split("-").length - 1;

  if (!hasChildren) {
    return (
      <Link
        href={item.id === "00" ? "#" : `/contents/${item.id}`}
        className={cn(
          "group relative py-3 px-4 hover:bg-accent rounded-md cursor-pointer transition-all duration-200 flex items-center gap-2 text-foreground dark:text-gray-200 dark:hover:bg-gray-800",
          depth > 0 ? "ml-4" : "",
          item.id === "00" ? "pointer-events-none" : ""
        )}
      >
        <ChevronRight className="h-4 w-4 text-muted-foreground dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="text-sm md:text-base hover:text-primary dark:hover:text-primary/90">
          {item.title}
        </span>
      </Link>
    );
  }

  return (
    <AccordionItem
      value={index}
      className={cn("border-none", depth > 0 ? "ml-4" : "")}
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
        `}
      >
        {item.title}
      </AccordionTrigger>
      <AccordionContent className="pt-2">
        <div className="space-y-1">
          {item.children?.map((child, childIndex) => (
            <ContentList
              key={childIndex}
              item={child}
              index={`${index}-${childIndex}`}
            />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
