import React from 'react';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <header className="bg-[#f5f5f5] p-10 border-b-2 border-[#e0e0e0]">
          <div className="p-10 m-auto max-w-[1200px]">
            <h1 className="m-0 text-2xl">Minecraft Guides</h1>
            <nav>
              <ul className='flex list-none p-0 m-[10px]'>
                <li className='mr-5'><a href="/">Home</a></li>
                <li className='mr-5'><a href="/about">About</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="p-10 m-auto max-w-[1200px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
          </Routes>
        </main>

        <footer className="bg-[#f5f5f5] p-5 border-t-2 border-black text-center">
          <div className="p-10 m-auto max-w-[1200px]">
            <p>© {new Date().getFullYear()} My Markdown Blog</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App;
