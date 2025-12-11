import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home1 from "./Home1";
import Store1 from "./Store1";
import About1 from "./About1";

const App1 = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Home1 />}>Home</Route>
          <Route path="/about1" element={<About1 />}>About</Route>
          <Route path="/store1" element={<Store1 />}>Store</Route>
          <Route></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App1;

function NavWrapper() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about1">About</Link>
        <Link to="/store1">Store</Link>
      </nav>
    </div>
  );
}
