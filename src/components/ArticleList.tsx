import { Article } from '../utils/types';
import { Link } from 'react-router-dom';
import { format } from "date-fns";

interface ArticleListProps {
    articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    
    return (
        <div className="mt-7 grid grid-cols-3 gap-2">
            {articles.map(article => (
                <Link to={`/articles/${article.slug}`} key={article.slug} className="p-5 bg-[#2e3347] text-white rounded-xl hover:shadow-2xl transition-all delay-100 " viewTransition>
                    <h2 className='text-xl'>{article.title}</h2>
                    <div className="text-[#dfdede] mb-2.5 flex items-center">
                        {article.date && (
                            <span className="mt-4">
                                {format(new Date(article.date), 'MMMM dd, yyyy')}
                            </span>
                        )}
                    </div>
                    <p className="article-excerpt">{article.excerpt}</p>
                </Link>
            ))}
        </div>
    )
}

export default ArticleList;