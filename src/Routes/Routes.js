import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Category from "../Components/Category/Category";
import Courses from "../Components/Courses/Courses";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import News from "../Components/News/News";
import PrivetRoute from "../Components/PrivetRoute/PrivetRoute";
import Shipping from "../Components/Shipping/Shipping";
import SingUp from "../Components/Sing up/SingUp";
import Main from "../layouts/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                 path:'/category/:id',
                 element:<Category></Category>,
                 loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element:<News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/singup',
                element:<SingUp></SingUp>
            },
            {
                path:'/shipping',
                element:<PrivetRoute><Shipping></Shipping></PrivetRoute>
            }
        ]
    }
])