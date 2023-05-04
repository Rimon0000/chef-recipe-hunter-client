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
      ]
    },
    {
      path: '/chefrecipe',
      element: <ChefRecifeLayout></ChefRecifeLayout>,
      children:[
        {
          path: "/chefrecipe/:id",
          element:<ChefRecipe></ChefRecipe>,
          loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
        }
      ]
    }
  ]);


export default router