// src/types/blog.ts
export interface RelatedPost {
  title: string;
  slug: string;
}

export interface BlogPost {
  slug: string;
  icon: string;
  title: string;
  description: string;
  content?: string;
  details?: string[];
  stats: string;
  usage: string;
  gradient: string;
  date?: string;
  readTime?: string;
  author?: string;
  tags?: string[];
  featuredImage?: string;
  relatedPosts?: RelatedPost[];
}