import './App.css';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CocktailDetailPage from './pages/CocktailDetailPage';
import NewsLetterPage from './pages/NewsLetterPage';
import PageLayout from './pages/PageLayout';
import ErrorPage from './pages/ErrorPage';
import { loader as landingLoader } from './pages/HomePage';
import { loader as singleCocktailLoader } from './pages/CocktailDetailPage';
import SinglePageError from './pages/SinglePageError';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          loader: landingLoader,
          errorElement: <SinglePageError />,
          element: <HomePage />,
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
        {
          path: '/cocktail/:id',
          loader: singleCocktailLoader,
          errorElement: <SinglePageError />,
          element: <CocktailDetailPage />,
        },
        {
          path: '/newsLetter',
          element: <NewsLetterPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
