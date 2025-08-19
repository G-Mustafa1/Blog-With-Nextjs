export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  content: string;
}

export interface BlogPageParams {
  params: {
    id: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}