import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToy from "../Pages/MyToy/MyToy";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoutes from "./PrivateRoutes";
import Not_found from "../Not_found/Not_found";
import Blog from "../Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Not_found></Not_found> ,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'addToy',
                element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:8000/allToy')

            },
            {
                path: 'myToy',
                element: <PrivateRoutes><MyToy></MyToy></PrivateRoutes>
            },
            {
                path:'toyDetails/:id',
                element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:8000/allToy/details/${params.id}`)
            },
            {
                path: 'blogs',
                element: <Blog></Blog>
            }

        ]
    },
]);
export default router;