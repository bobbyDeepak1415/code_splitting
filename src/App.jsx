import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/store" element={<Store />}>
            Store
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

function NavWrapper() {
  return (
    <div>
      <nav style={{display:"flex",gap:"1rem",fontSize:"30px"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Link to="/store">store</Link>
      </nav>
      <Outlet />
    </div>
  );
}
