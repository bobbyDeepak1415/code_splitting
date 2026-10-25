import React, { Suspense } from "react";
import { Routes,Route } from "react-router-dom";

const App1 = () => {
  return <div>

<Routes>
  <Route path='/' element={<NavWrapper/>}>
<Route path="/" element={}>Home</Route>
  </Route>
</Routes>

  </div>;
};


function NavWrapper(){
  return (
    <>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/store'>Store</Link>
    </nav>
    <Suspense>
      <Outlet/>
    </Suspense>
    </>
  )
}

export default App1;
