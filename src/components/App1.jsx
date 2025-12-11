import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const App1 = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<navWrapper/>}>

        </Route>
      </Routes>
    </div>
  );
};

export default App1;



function navWrapper(){
    return (
        <div>
            <nav>


        <Link to='/'>
        
        </Link>
            </nav>
        </div>
    )
}
