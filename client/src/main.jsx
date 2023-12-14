import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { AuthProvider } from './Components/Common/authContext.jsx';
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx'
import Library from './Components/Library/Library.jsx';
import Insert from './Components/Insert/Insert.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import Places from './Components/Places/Places.jsx';
import PlaceDetail from './Components/PlaceDetail/PlaceDetail.jsx';
import SelectedCity from './Components/SelectedCity/SelectedCity.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';



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
        path: "/places",
        element: <Places />,
      },
      {
        path: "/insert",
        element: <Insert />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/place-detail",
        element: <PlaceDetail />,
      },
      {
        path: "/scity",
        element: <SelectedCity />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
