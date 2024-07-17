import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";

import Contact from "../pages/Contact";
import Products from './../pages/Products';


const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        { path: "/", element: <Home /> },
        { path: "/about-us", element: <About /> },
        { path: "/our-products", element: <Products /> },
        { path: "/contact-us", element: <Contact /> },
    ],
  },
]);

export default Router;
