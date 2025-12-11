import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About1 from "./About1";
import Home1 from "./Home1";
import Store1 from "./Store1";

const App1 = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Home1 />}>
            Home
          </Route>
          <Route path="/about1" element={<About1 />}>
            About
          </Route>
          <Route path="/store1" element={<Store1 />}>
            Store
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App1

function NavWrapper() {
  return (
    <div>
      <nav style={{display:"flex",fontSize:"2rem",gap:"1rem"}}>
        <Link to="/">Home1</Link>
        <Link to="/about1">About1</Link>
        <Link to="/store1">Store1</Link>
      </nav>
      <Outlet/>
    </div>
  );
}
