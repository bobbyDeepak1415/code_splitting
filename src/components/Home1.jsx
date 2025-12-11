import React from "react";
import Sum from "../sum";

const Home1 = () => {
  return (
    <div>
      <h1>Home11</h1>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <button
        onClick={() => {
          console.log(Sum(2, 5));
        }}
      >
        Add 2 and 5
      </button>
    </div>
  );
};

export default Home1;
