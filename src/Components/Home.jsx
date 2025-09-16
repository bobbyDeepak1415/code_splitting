import React, { Suspense, useState, useTransition } from "react";
// import AdminData from "./AdminData";
// import Sum from "../sum";

const AdminData = React.lazy(() =>
  delay(1000)
    .then(() => import("../Components/AdminData"))
    .then((module) => {
      return {
        default: module.AdminData,
      };
    })
);

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() =>
          import("../sum").then((module) => alert(module.default(4, 3)))
        }
      >
        4+3
      </button>
      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          startTransition(() => {
            setIsAdmin((prev) => !prev);
          });
        }}
      >
        Toggle Admin
      </button>
      {isPending && "Loading"}
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
