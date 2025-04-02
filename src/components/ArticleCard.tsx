import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../utils/types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link to={`/article/${article.slug}`}>
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <Link to={`/article/${article.slug}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-green-600 transition duration-300">{article.title}</h3>
        </Link>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        <Link 
          to={`/article/${article.slug}`}
          className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
        >
          Read More
          <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
