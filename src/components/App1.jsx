import React, { Suspense } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
// import Home1 from "./Home1";
import About1 from "./About1";
// import { Store1 } from "./Store1";

const Home1 = React.lazy(() =>
  import("./Home1").then((module) => {
    return {
      default: module.default,
    };
  }),
);

const Store1 = React.lazy(() =>
  import("./Store1").then((module) => {
    return {
      default: module.Store1,
    };
  }),
);

const App1 = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Home1 />} />

          <Route path="/about" element={<About1 />} />

          <Route path="/store" element={<Store1 />} />
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
