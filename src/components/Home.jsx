import React, { Suspense, useState } from "react";
// import { Sum } from '../sum'
// import About from './About'

const About = React.lazy(() =>
  delay(1200).then(() =>
    import("./About").then((module) => {
      return {
        default: module.About,
      };
    })
  )
);

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <div>
        <button
          onClick={() =>
            import("../sum").then((module) => alert(module.default(3, 4)))
          }
        >
          Add 3,4
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <button onClick={() => setLoggedIn((prev) => !prev)}> Login</button>
        <br></br>
        <br></br>
        <br></br>
        {loggedIn ? (
            <Suspense fallback={"loading..."}>
          <About />
            </Suspense>
        ) : (
          "Not logged In"
        )}
      </div>
    </div>
  );
}

function delay(timer) {
  return new Promise((resolve) => {
    setTimeout(resolve, timer);
  });
}
