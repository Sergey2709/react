import './App.css';
import React, { useState } from 'react';

function App() {
  //refs
  const isInputEmpty = React.createRef();
  const [result, setResult] = useState([]);

  const cE = React.createElement; // Мне понравился этот прием

  //created elements
  const h1 = cE('h1', {}, 'unit_08');
  const h2 = cE('h2', { className: 'text-orange' }, 'header 2');
  const p = cE('p', { style: { color: 'red' } }, 'this is p');
  const input = cE('input', { value: 55 });
  const p1 = cE('p1', {}, 'hi');
  const p2 = cE('p2', {}, ' world');
  const div = cE('div', { className: 'text-grey' }, p1, p2);

  const getValueFromInput = () => {
    if (isInputEmpty.current.value === '') {
      return;
    }

    setResult([...result, isInputEmpty.current.value]);
    isInputEmpty.current.value = '';
  };

  return (
    <>
      <div>{h1}</div>
      <div>{h2}</div>
      <div>{p}</div>
      {div}
      <div>{input}</div>
      <div>
        <input type="text" ref={isInputEmpty} />
        <button onClick={getValueFromInput}>Check the Input</button>
        <ul>
          {result.map((el, index) => <li key={index.toString()}>{el}</li>)}
        </ul>
      </div>
    </>
  );
}

export default App;
