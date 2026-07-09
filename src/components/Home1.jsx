import React, { useState } from "react";
import { About } from "./About";
import About1 from "./About1";
// import sum from "../sum";
// import { sum } from "../sum";

const Home1 = () => {

  const [isLoggedIn,setIsLoggedIn]=useState(false)

  return (
    <div>
      <h1>Home111</h1>

      <button
        onClick={() =>
          import("../sum").then((module) => console.log(module.default(3, 4)))
        }
      >
        Add 3,4
      </button>

      <div>
        <button onClick={()=>setIsLoggedIn(prev=>!prev)}>Login</button>
        <About1/>
      </div>
    </div>
  );
};

export default Home1;
