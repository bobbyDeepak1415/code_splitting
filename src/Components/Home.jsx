import React, { Suspense, useState } from "react";
// import AdminData from "./AdminData";
// import Sum from "../sum";

const AdminData = React.lazy(() =>
  delay(1200).then(() =>
    import("./AdminData").then((module) => {
      return {
        default: module.default,
      };
    })
  )
);

export function Home() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() =>
          import("../sum").then((module) => alert(module.default(4, 9)))
        }
      >
        4+3
      </button>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={() => setIsAdmin((prev) => !prev)}>Toggle Admin</button>

      {isAdmin ? (
        <Suspense fallback={<h2>fetching...</h2>}>
          <AdminData />
        </Suspense>
      ) : (
        <h2>Not Admin</h2>
      )}
    </>
  );
}

function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
