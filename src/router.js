import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Home from "./Pages/Home/Components/Home";
import Login from "./Pages/Login/Login";
import Orders from "./Pages/Orders/Orders";
import Privet from "./Pages/Shared/Privet";
import SignUp from "./Pages/SignUp/SignUp";

 const router = createBrowserRouter([
         {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/signup',
                    element:<SignUp></SignUp>
                },
                {
                    path:'/orders',
                    element:<Privet><Orders></Orders></Privet>
                },
                {
                    path:'/checkout/:id',
                    element:<Privet><CheckOut></CheckOut></Privet>,
                    loader:async ({params})=>{
                        return fetch(`https://genius-car-server-delta.vercel.app/services/${params.id}`)
                    }
                },
            ]
         }
 ])
 export default router;