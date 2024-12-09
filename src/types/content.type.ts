export type TOCItem = {
  id: string;
  title: string;
  children?: TOCItem[];
};
