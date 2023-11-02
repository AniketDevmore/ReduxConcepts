import { useState } from "react";
import "./App.css";
import {
  changeInput,
  DecrementMe,
  IncrementMe,
  IncrementMeBy10,
  IncrementMeByNum,
  IncrementMeByNum1,
} from "./slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [state, setState] = useState(0);
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.counterSlice);

  const incrementHandler = () => {
    dispatch(IncrementMe());
  };

  const decrementHandler = () => {
    dispatch(DecrementMe());
  };

  const incrementBy10Handler = () => {
    dispatch(IncrementMeBy10());
  };

  const incrementByNumHandler = () => {
    dispatch(IncrementMeByNum(Number(globalState.input)));
  };

  const handleChange = (event) => {
    dispatch(changeInput(event.target.value));
  };

  const incrementByNumHandler1 = () => {
    dispatch(IncrementMeByNum1(Number(state)));
  };
  const handleChange1 = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="App">
      <h1>Count- {globalState.value}</h1>
      <input type="number" onChange={handleChange} />
      <br />
      <input type="number" onChange={handleChange1} />
      <br />
      <button onClick={incrementHandler}>Increament</button>
      <button onClick={decrementHandler}>Decreament</button>
      <button onClick={incrementBy10Handler}>Increament by 10</button>
      <button onClick={incrementByNumHandler}>Increament by num</button>
      <button onClick={incrementByNumHandler1}>
        Increament by num another
      </button>
    </div>
  );
}

export default App;
