import React from 'react';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-[#1f2333]">
        <header className="pb-12 bg-[#474e6a] rounded-b-lg drop-shadow-xl">
          <div className="p-5 m-auto max-w-screen h-5">
            <nav>
              <ul className='flex list-none mt-[10px] text-white font-[Minecraft]'>
                <li className="mr-5 text-3xl text-white"><a href="/">Nemesis Minecraft</a></li>
                <li className='ml-10 mr-5 mt-2'><a href="/about" className='uppercase'>About</a></li>
                <li className='mr-5 mt-2'><a href="/servers" className='uppercase'>Server</a></li>
                <li className='mr-5 mt-2'><a href="/plugins" className='uppercase'>Plugins</a></li>
                <li className='mr-5 mt-2'><a href="/mods" className='uppercase'>Mods</a></li>
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

        <footer className="p-5 border-t border-[#e0e0e0] text-center">
          <div className="p-10 m-auto max-w-[1200px]">
            <p>© {new Date().getFullYear()} Nemesis Minecraft</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App;
