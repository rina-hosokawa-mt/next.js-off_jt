type Memo = {
  id: string;
  title: string;
  content: string;
};

export const appMemos: Memo[] = [
  { id: "1", title: "sabrina", content: "pop,152,America" },
  { id: "2", title: "taylor", content: "country,178,America" },
] as const;
