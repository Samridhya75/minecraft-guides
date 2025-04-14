import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ArticleContent from '../components/ArticleContent';
import { getArticleBySlug } from '../utils/articleUtils';
import { Article } from '../utils/types';

const ArticlePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [article,setArticles] = useState<Article | null>(null);
    const [error,setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchArticle = async() =>{
            if(!slug){
                setError('Article not Found!');
                return;
            }

            try {
                const foundArticle = await getArticleBySlug(slug);
                if(foundArticle){
                    setArticles(foundArticle);
                }else{
                    setError('Article not Found');
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchArticle();
    },[slug]);

    if(error || !article){
        return(
            <div className='w-full text-center bg-gray-900 text-white h-screen'>
                <h2 className='text-3xl pt-10'>{error || "Article not Found"}</h2>
                <Link to="/" className='pt-10 text-xl block text-blue-200'>← Back to Home</Link>
            </div>
        )
    }

    return (
        <div className=''>
            <ArticleContent article={article} />
        </div>
    )
};

export default ArticlePage;