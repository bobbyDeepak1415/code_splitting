import React, { Suspense } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home1 from "./Home1";
import About1 from "./About1";
import { Store1 } from "./Store1";

const App1 = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Home1/>}>
            Home
          </Route>
          <Route path="/about" element={<About1/>}>
            About
          </Route>
          <Route path="/store" element={<Store1/>}>
            Store
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App1;

function NavWrapper() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
