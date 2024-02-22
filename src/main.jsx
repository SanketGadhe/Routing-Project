import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import Fotter from "./Components/Fotter.jsx";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Github, { githubdata } from "./Components/Github.jsx";
import Contact from "./Components/Contact.jsx";
import Parameters from "./Components/Parameters.jsx";
// Method 1 but i prefer
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <App />
//       </>
//     ),
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "About",
//         element: <About />,
//       },
//       {
//         path: "Contact",
//         element: <Contact />,
//       },
//       {
//         path: "Github",
//         element: <Github />,
//       },
//     ],
//   },
// ]);
// Method 2 simple

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route
       path="Github" 
      element={<Github />} 
      loader={githubdata} />
      <Route path="Github/:userid" element={<Parameters/>} />
    </Route>,
  ])
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Navbar />
      <Outlet />
      <Fotter />
    </RouterProvider>
  </React.StrictMode>
);
