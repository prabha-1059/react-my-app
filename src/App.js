import React from "react";
import "./style.css";

export default function App() {
  const sayHelloHan=()=>{
    console.log("helo")
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={sayHelloHan}> Click
      </button>
    </div>
  );
}
