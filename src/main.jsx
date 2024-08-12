import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
