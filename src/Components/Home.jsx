import React, { useState } from "react";
import AdminData from "./AdminData";
import Sum from "../sum";

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={()=>alert(Sum(4,3))}
      >
        4+3
      </button>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={() => setIsAdmin((prev) => !prev)}>Toggle Admin</button>
      {isAdmin ? <AdminData /> : <h2>Not Admin</h2>}
    </>
  );
}
