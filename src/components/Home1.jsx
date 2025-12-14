import React from "react";
// import sum from "../sum";

const Home1 = () => {
  return (
    <div>
      <h1>Home1</h1>
      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={() =>
          import("../sum").then((module) => alert(module.sum(2, 9)))
        }
      >
        Add 2,9
      </button>
    </div>
  );
};

export default Home1;
