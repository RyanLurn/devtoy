import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((previousCount) => previousCount + 1)}
      className="rounded-2xl bg-blue-500 px-3 py-2 text-white"
    >
      Count: {count}
    </button>
  );
}

export { Counter };
