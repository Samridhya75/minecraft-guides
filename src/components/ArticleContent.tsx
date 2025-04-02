import React from 'react';
import { Article } from '../utils/types';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

interface ArticleContentProps {
  article: Article | null;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  return (
    <div className="w-full block justify-items-center">
      <Link to="/" className='mb-7 block mt-20'> ← Back to all articles </Link>
      <h1 className="font-bold text-2xl mb-5">{article?.title}</h1>
      <div className="mb-2.5 flex items-center">
        {article?.date && (
          <span className="mr-3">
            {format(new Date(article.date), 'MMMM dd, yyyy')}
          </span>
        )}
        {article?.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap">
            {article.tags.map(tag => (
              <span key={tag} className="bg-[#353434] text-white p-1 rounded mr-2 text-xs">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div 
        className="leading-[1.7] prose prose-lg max-w-4xl prose-code:text-blue-400 prose-a:text-blue-500 mb-10"
        dangerouslySetInnerHTML={{ __html: article?.content || "" }}
      />
    </div>
  );
};

export default ArticleContent;