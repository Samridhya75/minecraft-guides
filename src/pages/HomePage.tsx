import React,{ useEffect, useState } from 'react';
import ArticleList from '../components/ArticleList';
import { getAllArticles } from '../utils/articleUtils';
import { Article } from '../utils/types';

const HomePage: React.FC = () => {
  const [articles,setArticles] = useState<Article[]>([]) ;
  
  useEffect(()=>{
    const articleCalls = async() =>{
        const articleBlob = await getAllArticles();
        setArticles(articleBlob);
    };
    articleCalls();
  })
  return (
    <div className="home-page">
      <h1 className='text-xl'>Latest articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
};

export default HomePage;