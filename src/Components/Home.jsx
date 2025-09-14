import React, { useState } from "react";
import AdminData from "./AdminData";

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);

  const sum = (a, b) => {
    return a + b;
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => alert(sum(2, 2))}>2+2</button>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={() => setIsAdmin(prev => !prev)}>Toggle Admin</button>
      {isAdmin ? <AdminData/> : <h2>Not Admin</h2>}
    </>
  );
}
