import './App.css';
import React, { useState } from 'react';
import Test from './Test';
import Test2 from './Test2';
// import Ref from './Ref';

function App() {
  // refs
  const refRange = React.createRef();
  const refDiv = React.createRef();
  const refWithClass = React.createRef();
  const refWithoutClass = React.createRef();
  // state
  const [s1, setS1] = useState(50);
  // ========================
  let a = 50;
  function changeHandler(event) {
    a = event.target.value;
    console.log(a);
    setS1(event.target.value);
  }
  function changeHandler2() {
    console.log(refRange.current.value);
    refRange.current.style.border = '1px solid red';
    refDiv.current.style.border = '1px solid red';
    refDiv.current.style.width = '150px';
    console.log(refDiv.current.innerHTML);
    console.log(refWithoutClass);
    console.log(refWithClass);
    refWithClass.current.go();
  }
  return (
    <div>
      <div><input type="range" onChange={changeHandler} ref={refRange} /></div>
      <div><button onClick={changeHandler2}>button</button></div>
      <div>Out in app: {a}</div>
      <div>State in app: {s1}</div>
      <div ref={refDiv}>1</div>
      {/* <Ref a2={s1}/> */}
      {/* <Test ref={refWithoutClass} /> */}
      <Test2 ref={refWithClass} />
    </div>
  );
}

export default App;
