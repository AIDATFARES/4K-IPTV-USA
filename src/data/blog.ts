export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  coverImage?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [];
