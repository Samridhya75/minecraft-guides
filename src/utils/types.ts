export interface Article{
    id: string;
    title: string;
    slug: string;
    content: string | Promise<string>;
    excerpt: string;
    date: string;
    tags: string[];
}