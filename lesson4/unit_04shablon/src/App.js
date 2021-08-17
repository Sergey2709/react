import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  let count4 = 0;
  const selectedItem = React.createRef();
  const outSelectedItem = React.createRef();
  const [output, setOutput] = useState('');

  const setColor = React.createRef();

  const inputNum = React.createRef();
  const [outputNum, setOutputNum] = useState('');

  const scalesValue = React.createRef();

  const whatInput = React.createRef();

  const getRandomColor = max => {
    const firstNum = Math.floor(Math.random() * max);
    const secondNum = Math.floor(Math.random() * max);
    const thirdNum = Math.floor(Math.random() * max);

    const result = `rgb(${firstNum}, ${secondNum}, ${thirdNum})`;
    return result;
  };

  function task1() {
    console.log('task2');
  }

  function task2(e) {
    return (e.target.className += ' active');
  }

  function task3(e) {
    console.log(e.target.value);
  }

  function task4() {
    count4 += 1;
    console.log(count4);
  }

  function task5(e) {
    const result = e.target.nextElementSibling;
    const valueOfCheckbox = e.target.value;

    if (e.target.checked) {
      return (result.textContent = valueOfCheckbox);
    }
    return (result.textContent = 0);
  }

  function task6() {
    outSelectedItem.current.innerHTML = selectedItem.current.value;
    setOutput(selectedItem.current.value);
  }

  function task7() {
    setColor.current.style.backgroundColor = getRandomColor(256);
  }

  function task8() {
    const newValue = inputNum.current.value;
    const strArr = newValue.split('');

    const newStrArr = strArr.map(el => {
      if (Number.isInteger(+el)) {
        return '1';
      } else {
        return '0';
      }
    })
    
    const newString = newStrArr.join('')

    setOutputNum(newString);
  }

  function task9(e) {
    scalesValue.current.textContent = e.target.value;
  }

  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(+whatInput.current.value);
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>
          Push
        </button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={e => task2(e)}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={e => task3(e)} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>
          Count
        </button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={e => task5(e)} />
        <div className="out-5"></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={selectedItem}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <p ref={outSelectedItem}></p>
        <h3>{output}</h3>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={setColor}></div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8} ref={inputNum}></input>
        <div className="out-8">{outputNum}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={e => task9(e)}></input>
        <div className="out-9" ref={scalesValue}></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={whatInput}></input>
        <button className="task-10" onClick={e => task10(e)}>
          Push
        </button>
      </section>
    </>
  );
}

export default App;
