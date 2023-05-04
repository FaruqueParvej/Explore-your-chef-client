import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Blogs from "../components/Blogs/Blogs";
import Recipe from "../components/Recipe/Recipe";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "/",
          element: <Main></Main> ,
          loader: ()=>fetch("http://localhost:5000/chefs")
        },
        {
            path:"/blogs",
            element: <Blogs></Blogs>
        },
        {
            path:"/chefs/:id",
            element: <PrivateRoute> <Recipe></Recipe></PrivateRoute> ,
            loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`),
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/signup",
            element:<Signup></Signup>
        }
    ]
    },
  ]);

  export default router;