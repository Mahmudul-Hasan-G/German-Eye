import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx'
import Library from './Components/Library/Library';
import Insert from './Components/Insert/Insert';
import LogIn from './Components/LogIn/LogIn';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/insert",
        element: <Insert />,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
