import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import FAQ from './Components/FAQ.jsx';
import Sample from './pages/Sample.jsx';
import Registration from './pages/Registration.jsx';

const router = createBrowserRouter([
  {
    path: "",
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
