import React from "react";
import useSessionStorage from "../../hooks/useSessionStorage";
import teaseImg from './teaseEmoji.png'
import './example.style.css'

const SessionStorageExample = () => {
  const [state, setState] = useSessionStorage("name", "");
  return (
    <div className="example-div">
        <h3>I will stay here even if you refresh this page</h3>
        <img style={{width:"3rem",marginBottom:"2rem"}} src={teaseImg} alt="" />
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

export default SessionStorageExample;
