import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe";
import ChefRecifeLayout from "../layouts/ChefRecifeLayout";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import PopularRecipe from "../pages/PopularRecipe/PopularRecipe";
import RecipeDetails from "../pages/PopularRecipe/RecipeDetails";







  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:"/recipes",
          element: <PopularRecipe></PopularRecipe>
        },
        {
          path:"/recipes/:id",
          element: <RecipeDetails></RecipeDetails>,
          // loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
          loader: ({params}) => {
            const id = params.Id
            const data = fetch('https://chef-recipe-hunter-server-rimon0000.vercel.app/recipes')
            return data
          }
        },
      ]
    },
    {
      path: '/chefrecipe',
      element: <ChefRecifeLayout></ChefRecifeLayout>,
      children:[
        {
          path: "/chefrecipe/:id",
          element:<PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
          loader: ({params}) => fetch(`https://chef-recipe-hunter-server-rimon0000.vercel.app/chef/${params.id}`)
        }
      ]
    }
  ]);


export default router