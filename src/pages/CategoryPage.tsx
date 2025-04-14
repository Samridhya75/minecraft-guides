import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getAllArticles, getArticlesByTags } from '../utils/articleUtils';
import { Article, ALL_CATEGORIES } from '../utils/types';
import { format } from 'date-fns';

const ArticleCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Set default category if none is provided
  useEffect(() => {
    if (!category) {
      navigate(`/categories/${ALL_CATEGORIES[0]}`, { replace: true });
    }
  }, [category, navigate]);

  // Fetch articles when category changes
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        let fetchedArticles: Article[];

        if (category) {
          fetchedArticles = await getArticlesByTags(category);
        } else {
          fetchedArticles = await getAllArticles();
        }

        setArticles(fetchedArticles);
        setError(null);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Failed to load articles. Please try again later.');
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

    // Close mobile menu when category changes
    setMobileMenuOpen(false);
  }, [category]);

  return (
    <>
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center md:bg-[url('/kb-background.png')] bg-[url('/kb-background-mobile.png')] z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-[Minecraft] text-white mb-4 drop-shadow-lg">Knowledge Base</h1>
        </div>
      </section>
      <div className="mx-auto px-5 lg:px-16 py-6 md:py-8 bg-gray-900">
        <div className="flex justify-between items-center mb-6">
          {/* Mobile category selector toggle */}
          <button
            className="md:hidden bg-green-500 px-4 py-2 rounded-md text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 'Hide Categories' : 'Show Categories'}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Category Selector - Mobile Dropdown */}
          <div className={`
          w-full md:w-64 
          overflow-hidden transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? 'max-h-96' : 'max-h-0 md:max-h-screen'}
        `}>
            <CategorySelector currentCategory={category || ''} />
          </div>

          {/* Articles Display (Right Side) */}
          <div className="flex-1">
            {/* Current category display for mobile */}
            <div className="md:hidden mb-4">
              <span className="text-white">Category:</span>
              <span className="ml-2 font-medium text-white">{formatCategoryName(category || '')}</span>
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            ) : articles.length === 0 ? (
              <div className="text-center py-8 bg-gray-900 rounded-lg">
                <p className="text-gray-600">No articles found in this category.</p>
                <p className="text-sm text-gray-500 mt-2">Try selecting a different category.</p>
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-500 mb-4">Showing {articles.length} articles</p>
                <div className="grid grid-rows-1 gap-2">
                  {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// Category Selector Component
const CategorySelector: React.FC<{ currentCategory: string }> = ({ currentCategory }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 text-white p-4 rounded-lg sticky top-4 font-[Minecraft] ">
      <h2 className="text-lg md:text-xl px-3 pb-3 mb-3 border-b-[1px] border-b-gray-700 ">Categories</h2>
      <ul className="space-y-1">
        {ALL_CATEGORIES.map((category) => (
          <li key={category}>
            <Link
              to={`/categories/${category}`}
              className={`block px-3 py-2 rounded-md transition text-sm md:text-base ${currentCategory === category
                  ? 'bg-green-500 text-white'
                  : 'hover:bg-gray-700'
                }`}
            >
              {formatCategoryName(category)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Article Card Component
const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <Link to={`/articles/${article.slug}`} className="bg-gray-800 border border-gray-700 rounded-lg shadow overflow-hidden hover:shadow-md transition flex flex-col md:max-w-3xl">

      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-white">
          {article.title}
        </h3>
        <p className="text-xs md:text-sm text-gray-300 mb-2">
          {format(new Date(article.date), 'dd MMMM, yyyy')}
        </p>
        <p className="text-white text-xs md:text-sm mb-3 line-clamp-3 flex-grow">
          {article.excerpt}
        </p>
        <div className="flex flex-wrap gap-1 mt-auto">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
          {article.tags.length > 3 && (
            <span className="text-xs text-gray-500">+{article.tags.length - 3} more</span>
          )}
        </div>
      </div>
    </Link>
  );
};

// Helper function to format category names
const formatCategoryName = (category: string): string => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

export default ArticleCategoryPage;