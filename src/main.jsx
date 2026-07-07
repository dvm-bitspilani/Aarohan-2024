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
import Brochure from './pages/Brochure.jsx';

function setAppHeight() {
  document.documentElement.style.setProperty(
    '--app-height',
    `${window.innerHeight}px`
  );
}
setAppHeight();
window.addEventListener('orientationchange', () => {
  setTimeout(setAppHeight, 200);
});

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
    path: "/FAQs",
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
  {
    path:"/Brochure",
    element: <Brochure />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} basename="/aarohan2027" />
  </React.StrictMode>,
)