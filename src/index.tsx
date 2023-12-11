import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import Spinner from "./components/spinner/Spinner";

import "./App.css";
import Home from "./components/home/Index";
// import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./components/about/Index";
import Contact from "./components/contact/Index";
import PropertyList from "./components/property list/Index";
import ProperType from "./components/property type/Index";
import PropertyAgent from "./components/property agent/Index";
import Testimonial from "./components/testimonial/Index";
import Error from "./components/error/Index";
import { basename } from "path";

// const App = lazy(() => delayForDemo(import("./App")));

// Add a fixed delay so you can see the loading state
// function delayForDemo(promise: any) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 1000);
//   }).then(() => promise);
// }

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/PropertyList",
    element: <PropertyList />,
  },
  {
    path: "/PropertyAgent",
    element: <PropertyAgent />,
  },
  {
    path: "/PropertyType",
    element: <ProperType />,
  },
  {
    path: "/Testimonial",
    element: <Testimonial />,
  },
  {
    path: "/Error",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Suspense fallback={<Spinner />}> */}
    {/* <Router> */}
    {/* <App /> */}
    {/* </Router> */}
    {/* </Suspense> */}
    <RouterProvider router={Router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//error of url change
// Could not load content for webpack://react-devtools-extensions/react-devtools-shared/src/backend/console.js (Fetch through target failed: Unsupported URL scheme; Fallback: HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME)