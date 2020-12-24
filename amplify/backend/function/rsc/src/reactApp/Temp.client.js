import * as React from "react";

export default function Temp() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      Hello from Temp.client.js
      <button onClick={() => setCount(count + 1)}>Click me: {count}</button>
    </div>
  );
}
