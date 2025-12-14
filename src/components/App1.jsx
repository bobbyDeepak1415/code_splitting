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
          <Route path="/" element={<Home1 />}>
            Home1
          </Route>
          <Route path="/about1" element={<About1 />}>
            About1
          </Route>
          <Route path="/store1" element={<Store1 />}>
            Store1
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App1;

function NavWrapper() {
  return (
    <div>
      <nav style={{margin:"1rem",display:"flex",gap:"1rem",fontSize:"2rem"}}>
        <Link to="/">Home1</Link>
        <Link to="/about1">About1</Link>
        <Link to="/store1">Storre1</Link>
      </nav>
    </div>
  );
}
