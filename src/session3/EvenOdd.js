import { useState } from "react";

const EvenOdd = (props) => {
  const [count, setCount] = useState(0);
  const [even, setEven] = useState("");

  const handleCountChange = (e) => {
    setCount(e.target.value);
    if (e.target.value % 2 !== 0) {
      setEven("Odd");
    } else {
      setEven("Even");
    }
  };

  return (
    <div>
      <div>
        <input
          type="number"
          name="name"
          value={count}
          onChange={handleCountChange}
        />
        <h2>{even}</h2>
      </div>
    </div>
  );
};

export default EvenOdd;
