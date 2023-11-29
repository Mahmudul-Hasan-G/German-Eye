import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx'
import Library from './Components/Library/Library.jsx';
import Insert from './Components/Insert/Insert.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';


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
        path: "/signin",
        element: <SignIn />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
