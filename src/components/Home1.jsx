// import { sum } from "../sum";

// import { sum } from "../sum";

const Home1 = () => {
  return (
    <div>
      <h1>Home1</h1>

      <button
        onClick={() =>
          import("../sum").then((module) => console.log(module.sum(3, 4)))
        }
      >
        Add 3,4
      </button>
    </div>
  );
};

export default Home1;
