import { TOCItem } from "@/types/content.type";

export const tocData: TOCItem = {
  id: "00",
  title: "Handbook",
  children: [
    { id: "00", title: "The TypeScript Handbook" },
    { id: "01", title: "The Basics" },
    { id: "02", title: "Everyday Types" },
    { id: "03", title: "Narrowing" },
    { id: "04", title: "More on Functions" },
    { id: "05", title: "Object Types" },
    {
      id: "06",
      title: "Type Manipulation",
      children: [
        { id: "06_1", title: "Creating Types from Types" },
        { id: "06_2", title: "Generics" },
        { id: "06_3", title: "Keyof Type Operator" },
        { id: "06_4", title: "Typeof Type Operator" },
        { id: "06_5", title: "Indexed Access Types" },
        { id: "06_6", title: "Conditional Types" },
        { id: "06_7", title: "Mapped Types" },
        { id: "06_8", title: "Template Literal Types" },
      ],
    },
    { id: "07", title: "Classes" },
    { id: "08", title: "Modules" },
  ],
};
