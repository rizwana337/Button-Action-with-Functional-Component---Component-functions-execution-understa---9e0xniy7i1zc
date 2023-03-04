import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div id="main">
      {
        show ? <h1 id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</h1> : null
      }
      <button id='click' onClick={() => { setShow(!show) }}>button</button>
    </div>
  );
};


export default App;
