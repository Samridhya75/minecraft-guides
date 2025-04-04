import ReactDOM  from 'react-dom/client';
import './index.css';
import ArticlePage from './pages/ArticlePage';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import React from 'react';
import { Layout } from './Layout.tsx';
import HomePage from './pages/HomePage.tsx';
import CategoryPage from './pages/CategoryPage.tsx';

const root = document.getElementById("root");

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<HomePage />} />
      <Route path='/articles/:slug' element={<ArticlePage />} />
      <Route path='/categories/:category' element={<CategoryPage />} />
    </Route>
  )
);

ReactDOM.createRoot(root as any).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

