// import "./App.css";

import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Store from "./Components/Store";
import About from "./Components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

function NavWrapper() {
  return (
    <>
      <nav style={{display:"flex",gap:"1rem"}}>
        <Link to="/">Home....</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
