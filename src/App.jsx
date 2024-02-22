import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Link,
  NavLink,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Fotter from "./Components/Fotter";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <Outlet />
      <Fotter />
    </>
  );
}

export default App;
