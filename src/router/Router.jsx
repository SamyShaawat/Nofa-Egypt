import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import SolidParquets from "../pages/SolidParquets";
import MosaicParquets from "../pages/MosaicParquets";
import LaserInlays from "../pages/LaserInlays";
import OutdoorDecking from "../pages/OutdoorDecking";
import GardenFurniture from "../pages/GardenFurniture";
import EventsNewsletter from "../pages/EventsNewsletter";
import Login from "../pages/Login";
import ControlPanel from "../pages/ControlPanel";
import ProtectedRoute from "../components/Control Panel/ProtectedRoute.jsx"; // Create this component to protect routes

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/our-products", element: <Products /> },
      { path: "/our-products/solid-parquets", element: <SolidParquets /> },
      { path: "/our-products/mosaic-parquets", element: <MosaicParquets /> },
      { path: "/our-products/laser-inlays", element: <LaserInlays /> },
      { path: "/our-products/outdoor-decking", element: <OutdoorDecking /> },
      { path: "/our-products/garden-furniture", element: <GardenFurniture /> },
      { path: "/events-newsletter", element: <EventsNewsletter /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/login", element: <Login /> },
      {
        path: "/control-panel",
        element: (
          <ProtectedRoute>
            <ControlPanel />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default Router;
