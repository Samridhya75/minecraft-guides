import React from 'react';
import { Article } from '../utils/types';
import { format } from 'date-fns';

interface ArticleContentProps {
  article: Article | null;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  return (
    <div className="article">
      <h1 className="article-title">{article?.title}</h1>
      <div className="text-[#666] mb-2.5 flex items-center">
        {article?.date && (
          <span className="mr-3">
            {format(new Date(article.date), 'MMMM dd, yyyy')}
          </span>
        )}
        {article?.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap">
            {article.tags.map(tag => (
              <span key={tag} className="bg-[#f0f0f0] p-2 rounded mr-2 text-xl">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div 
        className="leading-[1.7]"
        dangerouslySetInnerHTML={{ __html: article?.content || "" }}
      />
    </div>
  );
};

export default ArticleContent;