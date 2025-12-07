import React, { Suspense } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import Store from "./components/Store";
// import { About } from "./components/About";

const Home = React.lazy(() =>
  delay(1500).then(() =>
    import("./components/Home").then((module) => {
      return {
        default: module.default,
      };
    })
  )
);
const About = React.lazy(() =>
  delay(2500).then(() =>
    import("./components/About").then((module) => {
      return {
        default: module.About,
      };
    })
  )
);

const Store = React.lazy(() =>
  import("./components/Store").then((module) => {
    return {
      default: module.default,
    };
  })
);



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<h4>"fetching..."</h4>}>
                <Home />
              </Suspense>
            }
          >
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
.
export default App;

function NavWrapper() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", fontSize: "30px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Link to="/store">store</Link>
      </nav>
      <Suspense fallback={<h4>Loading....</h4>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

const delay = (timer) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timer);
  });
};
