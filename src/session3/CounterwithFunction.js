import {useState} from "react";

const CounterHooks = (props) =>{
  const [count , setCount ] = useState(0);

  const increment = () =>{
    setCount(count + props.diff);
  }

  const decrement = () =>{
    setCount(count - props.diff);
  }
  return(
    <div>
      <h1 className="counter-display"> {count} </h1>
        <button onClick={increment}>+{props.diff}</button>
        <button onClick={decrement}>-{props.diff}</button>
    </div>
  )
}

export default CounterHooks;