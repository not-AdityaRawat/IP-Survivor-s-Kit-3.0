import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home"
import Contribute from './Components/Contribute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/Contribute",
        element:<Contribute/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
  <RouterProvider router={router} />;
  </StrictMode>,
)
