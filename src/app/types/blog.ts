export type Blog = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
};

export type BlogParams = {
  params: {
    id: string;
  };
};

