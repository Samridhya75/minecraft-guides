import React,{ useEffect, useState } from 'react';
import ArticleList from '../components/ArticleList';
import { getRecentArticles } from '../utils/articleUtils';
import { Article } from '../utils/types';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [articles,setArticles] = useState<Article[]>([]) ;
  
  useEffect(()=>{
    const articleCalls = async() =>{
        const articleBlob = await getRecentArticles();
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
            <Link to="/categories/java" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 mr-4">
              Explore Articles
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Articles Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[Minecraft] text-white">Featured Articles</h2>
          </div>
          
          <ArticleList articles={articles} />
        </div>
      </section>

      <section className='py-8 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-[Minecraft] text-white'>Categories</h2>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2.5'>
            <Link to={`/categories/java`} className='flex border rounded-lg items-center py-5 text-3xl font-[Minecraft] bg-[#2e3347] text-white '>
              <img src="/java.png" alt="java logo" className='w-16 h-16 mx-5' />
              Java
            </Link>
            <Link to="/categories/bedrock" className='flex border rounded-lg items-center text-center py-5 text-3xl font-[Minecraft] bg-[#2e3347] text-white'>
              <img src="/bedrock.png" alt="" className='w-16 h-16 mx-5' />
              Bedrock
            </Link>
            <Link to="/categories/server" className='flex border rounded-lg items-center text-center py-5 text-3xl font-[Minecraft] bg-[#2e3347] text-white'>
              <img src="/server.png" alt="" className='w-16 h-16 mx-5' />
              Servers
            </Link>
            <Link to="/categories/mods" className='flex border rounded-lg items-center text-center py-5 text-3xl font-[Minecraft] bg-[#2e3347] text-white'>
              <img src="/fabricmc.png" alt="" className='w-16 h-16 mx-5' />
              Mods
            </Link>
            <Link to="/categories/plugins" className='flex border rounded-lg items-center text-center py-5 text-3xl font-[Minecraft] bg-[#2e3347] text-white'>
              <img src="/papermc.webp" alt="" className='w-16 h-16 mx-5' />
              Plugins
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HomePage;