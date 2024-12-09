import { TOCItem } from "@/types/content.type";

export const tocData: TOCItem = {
  id: "00",
  title: "Handbook",
  children: [
    { id: "01", title: "The TypeScript Handbook" },
    { id: "02", title: "The Basics" },
    { id: "03", title: "Everyday Types" },
    { id: "04", title: "Narrowing" },
    { id: "05", title: "More on Functions" },
    { id: "06", title: "Object Types" },
    {
      id: "07",
      title: "Type Manipulation",
      children: [
        { id: "07_1", title: "Creating Types from Types" },
        { id: "07_2", title: "Generics" },
        { id: "07_3", title: "Keyof Type Operator" },
        { id: "07_4", title: "Typeof Type Operator" },
        { id: "07_5", title: "Indexed Access Types" },
        { id: "07_6", title: "Conditional Types" },
        { id: "07_7", title: "Mapped Types" },
        { id: "07_8", title: "Template Literal Types" },
      ],
    },
    { id: "08", title: "Classes" },
    { id: "09", title: "Modules" },
  ],
};
