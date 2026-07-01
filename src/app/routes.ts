import { createBrowserRouter, redirect } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './components/ContactPage';
import { ArticlesPage } from './components/ArticlesPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'services', Component: ServicesPage },
      { path: 'pricing', Component: PricingPage },
      { path: 'contact', Component: ContactPage },
      { path: 'articles', Component: ArticlesPage },
      { path: '*', loader: () => redirect('/') },
    ],
  },
]);
