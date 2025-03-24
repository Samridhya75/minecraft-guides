import { Article } from '../utils/types';
import { Link } from 'react-router-dom';
import { format } from "date-fns";

interface ArticleListProps {
    articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    
    return (
        <div className="mt-7">
            {articles.map(article => (
                <div key={article.slug} className="mb-10 pb-5 border-b-2 border-[#e0e0e0]">
                    <h2>
                        <Link to={`/articles/${article.slug}`}>{article.title}</Link>
                    </h2>
                    <div className="text-[#666] mb-2.5 flex items-center">
                        {article.date && (
                            <span className="mr-10">
                                {format(new Date(article.date), 'MMMM dd, yyyy')}
                            </span>
                        )}
                        {article.tags && article.tags.length > 0 && (
                            <div className="flex flex-wrap">
                                {article.tags.map(tag => (
                                    <span key={tag} className="bg-[#f0f0f0] p-2 rounded mr-2.5 text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <Link to={`/articles/${article.slug}`} className="inline-block font-bold mt-2.5">
                        Read more
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ArticleList;