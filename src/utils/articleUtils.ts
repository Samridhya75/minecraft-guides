import { marked } from "marked";
import { Article } from "./types";
import matter from "gray-matter";

function processMarkdown(content: string, slug: string): Article {
    const { data, content: markdownContent } = matter(content);

    return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        content: marked.parse(markdownContent),
        excerpt: data.excerpt || markdownContent.substring(0, 150) + '....',
        tags: data.tags || [],
        id: data.id,
    };
}

export async function getAllArticles(): Promise<Article[]> {

    const articleModules = import.meta.glob<string>('../../content/articles/*.md',
        {
            query: '?raw',
            import: 'default',
            eager: false
        });

    const articlePromises = Object.entries(articleModules).map(async ([path, importFn]) => {
        const slug = path.replace('../../content/articles/', '').replace(/\.md$/, '');

        const content = await importFn();

        return processMarkdown(content, slug);
    });

    const articles = await Promise.all(articlePromises);

    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getArticleSlugs(): Promise<string[]> {
    const articles = await getAllArticles();
    return articles.map(article => article.slug);
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
    try {
        const content = await import(`../../content/articles/${slug}.md?raw`);
        return processMarkdown(content.default, slug);
    } catch (error) {
        console.error(`Failed to load article with slug: ${slug}`, error);
        return undefined;
    }
}



