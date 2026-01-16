import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import FAQ from './Components/FAQ.jsx';
import Sample from './pages/Sample.jsx';
import Registration from './pages/Registration.jsx';
import Gallery from './pages/Gallery.jsx';
import AnswerKey from './pages/AnswerKey.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aarohan2025",
    element: <App />,
  },
  {
    path: "/FAQ",
    element: <FAQ />,
  },
  {
    path: "/SamplePaper",
    element: <Sample />,
  },
  {
    path: "/AnswerKey",
    element: <AnswerKey />,
  },
  {
    path: "/Registration",
    element: <Registration />,
  },
  {
    path: "/Gallery",
    element: <Gallery />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} basename="/aarohan2025" />
  </React.StrictMode>,
)
