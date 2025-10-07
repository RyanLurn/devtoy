import { useState } from "react";

import { Button } from "@/components/ui/button";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount((previousCount) => previousCount + 1)}>
      Count: {count}
    </Button>
  );
}

export { Counter };
