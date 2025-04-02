import React,{ useEffect, useState } from 'react';
import ArticleList from '../components/ArticleList';
import { getAllArticles } from '../utils/articleUtils';
import { Article } from '../utils/types';
import { Link } from 'react-router-dom';

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
    <div>
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen max-h-screen-md flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url('/min-background.png')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10"></div>
        
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-[Minecraft] text-white mb-4 drop-shadow-lg">Nemesis Minecraft</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-[Minecraft]">Your ultimate resource for all things Minecraft - from tutorials and mods to servers and community builds</p>
          <div className="mt-8">
            <Link to="/articles" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 mr-4">
              Explore Articles
            </Link>
            <Link to="/servers" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-md border border-white transition duration-300">
              Find Servers
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Articles Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Dive into our most popular guides, tutorials, and Minecraft content
            </p>
          </div>
          
          <ArticleList articles={articles} />
          
          <div className="text-center mt-12">
            <Link 
              to="/articles" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700"
            >
              View All Articles
              <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;