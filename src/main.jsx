import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home.jsx';
import ErrorPage from './component/errorPage/ErrorPage.jsx';
import About from './component/About/About.jsx';
import HomeBody from './component/HomeBody/HomeBody.jsx';
import Contect from './component/Contect/Contect.jsx';
import Login from './component/Login/Login.jsx';
import MyInfo from './component/MyInfo/MyInfo.jsx';
import Users from './component/Users/Users.jsx';


const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <HomeBody></HomeBody>

      },

      {
        path: '/about',
        element: <About></About>,
        children:[
          {
            path: 'myInfo',
            element: <MyInfo></MyInfo>
          }
        ]
        
      },
      {
        path: '/contect',
        element: <Contect></Contect>,
      
      },
      {
        path: "/users",
        loader: () => fetch('/data/users.json'),
        element: <Users></Users>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers}></RouterProvider>
  </StrictMode>,
)
