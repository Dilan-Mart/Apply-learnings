import React, { useReducer } from "react";

function init({initialCount,initialAge}) {
  return { count: initialCount, age:initialAge };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":  
    return { 
      ...state,
      count: state.count + 1
    };
    case "decrement":
      return {
        ...state,
        count: state.count - 1
      };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

const ReducerHook = ({initialCount,initialAge}) => {
  const [state, dispatch] = useReducer(reducer,{initialCount,initialAge}, init);
  console.log(state)
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: {initialCount,initialAge} })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
};

export default ReducerHook;
