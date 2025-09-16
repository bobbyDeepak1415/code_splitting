import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Store from "./Components/Store";
import Home from "./Components/Home";
import About from "./Components/About";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

function NavWrapper() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>
      <React.Suspense fallback={<h2>Loading</h2>}>

      <Outlet />
      </React.Suspense>
    </>
  );
}

