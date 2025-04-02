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
        imageUrl: data.imageUrl,
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

export async function getArticlesByTags(
    tags: string | string[],
    matchAll: boolean = false
): Promise<Article[]> {
    const allArticles = await getAllArticles();
    const tagsArray = Array.isArray(tags) ? tags : [tags];
    
    if (tagsArray.length === 0) return allArticles;
    
    return allArticles.filter(article => {
        if (!article.tags || article.tags.length === 0) return false;
        
        if (matchAll) {
            // Article must contain ALL specified tags
            return tagsArray.every(tag => article.tags.includes(tag));
        } else {
            // Article must contain ANY of the specified tags
            return tagsArray.some(tag => article.tags.includes(tag));
        }
    });
}

export async function getLimitedArticles(
    limit: number, 
    tags?: string | string[],
    matchAll: boolean = false
): Promise<Article[]> {
    // If tags are provided, get filtered articles first
    const articles = tags 
        ? await getArticlesByTags(tags, matchAll)
        : await getAllArticles();
    
    // Return only the specified number of articles
    return articles.slice(0, limit);
}

export async function getRecentArticles(count: number = 3): Promise<Article[]> {
    const articles = await getAllArticles();
    return articles.slice(0, count);
}


export async function getRelatedArticles(
    currentArticle: Article,
    limit: number = 3
): Promise<Article[]> {
    if (!currentArticle.tags || currentArticle.tags.length === 0) {
        // If no tags, just return recent articles excluding current one
        const articles = await getAllArticles();
        return articles
            .filter(article => article.slug !== currentArticle.slug)
            .slice(0, limit);
    }

    // Get articles that share tags with the current article
    const relatedArticles = await getArticlesByTags(currentArticle.tags, false);
    
    // Filter out the current article and sort by relevance (number of matching tags)
    return relatedArticles
        .filter(article => article.slug !== currentArticle.slug)
        .sort((a, b) => {
            const aMatchCount = a.tags.filter(tag => currentArticle.tags.includes(tag)).length;
            const bMatchCount = b.tags.filter(tag => currentArticle.tags.includes(tag)).length;
            return bMatchCount - aMatchCount;
        })
        .slice(0, limit);
}