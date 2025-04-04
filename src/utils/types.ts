export interface Article{
    id: string;
    title: string;
    slug: string;
    content: string | Promise<string>;
    excerpt: string;
    date: string;
    tags: string[];
    imageUrl: string;
}

export enum MinecraftCategory{
    JAVA = "java",
    BEDROCK = "bedrock",
    SERVER = "server",
    MODS = "mods",
    PLUGINS = "plugins",
}

export const ALL_CATEGORIES = Object.values(MinecraftCategory);