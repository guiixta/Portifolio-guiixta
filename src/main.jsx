import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router";
import './index.css'
import App from './App.jsx'
import SobreProjects from './pages/Sobre.jsx';


const root = document.getElementById("root");

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/sobre",
    element: <SobreProjects />
  },
]);

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


