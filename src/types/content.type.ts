export type ListItem = {
  id: string;
  title: string;
  children?: ListItem[];
  isQuiz?: boolean;
};
