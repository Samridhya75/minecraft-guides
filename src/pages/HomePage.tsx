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
      <h1>Welcome to My Blog</h1>
      <p>Read my latest articles below:</p>
      <ArticleList articles={articles} />
    </div>
  );
};

export default HomePage;