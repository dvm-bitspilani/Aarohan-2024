import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import FAQ from './Components/FAQ.jsx';
import Sample from './pages/Sample.jsx';
import Registration from './pages/Registration.jsx';
import Gallery from './pages/Gallery.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/aarohan2024",
    element: <App/>,
  },
  {
    path: "/FAQ",
    element: <FAQ/>,
  },
  {
    path: "/SamplePaper",
    element: <Sample/>,
  },
  {
    path: "/Registration",
    element: <Registration/>,
  },
  {
    path: "/Gallery",
    element: <Gallery/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}  basename="/aarohan2024"/>
  </React.StrictMode>,
)
