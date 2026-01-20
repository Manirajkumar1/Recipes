import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './page/Home.jsx'
import Favorites from './page/Favorites.jsx'
import MealPlanner from './page/MealPlanner.jsx'
import { DataProvider } from './context/DataProvider.jsx'
import RecipesDetails from './components/RecipesDetails.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/recipe/:id",
        element: <RecipesDetails/>
      },
      {
        path: "favorites",
        element: <Favorites/>
      },
      {
        path: "mealplanner",
        element: <MealPlanner/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
    <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
)
