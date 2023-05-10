import { useState } from "react";

function WithFunction(props) {
  const [count, setCount] = useState(0);

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        name="name"
        value={count}
        onChange={handleCountChange}
      />
      <h2>{count}</h2>
    </div>
  );
}
export default WithFunction;
