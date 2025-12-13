import React from "react";
// import Sum from "../sum";

const Home1 = () => {
  return (
    <div>
      Home1
      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={() =>
          import("../sum").then((module) => alert(module.Sum(2, 8)))
        }
      >
        Add 2,8
      </button>
    </div>
  );
};

export default Home1;
