import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe";
import ChefRecifeLayout from "../layouts/ChefRecifeLayout";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";



// const router = createBrowserRouter([
//     {
//       path: "/",
//       element:<Main></Main>,
//       children: [
//         {
//             path: "/",
//             element:<Home></Home>
//         },
//       ]
//     },
//     {
//       path:"/chefrecipe",
//       element:<ChefRecifeLayout></ChefRecifeLayout>
//     },
//     {
//       path:"/chefrecipe/:id",
//       element:<ChefRecipe></ChefRecipe>
//     }
//   ]);



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        }
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