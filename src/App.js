import React,{useState} from "react";

export default function App(props) {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>HI</h1>
      <h2>bye</h2>
      <div id="welcome">Welcome {props.name}</div>
      <div id="intialValue"> {counter}</div>
      <button onClick={() => setCounter(counter +1)}></button>
    </div>
  );
}
