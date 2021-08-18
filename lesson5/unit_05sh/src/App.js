import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const inputTask1 = React.createRef();
  const [st1, setSt1] = useState('');

  const [st2, setSt2] = useState(0);

  const [st3, setSt3] = useState('');

  const [st4, setSt4] = useState(0);

  const [st5, setSt5] = useState(0);
  const refTask5 = React.createRef();

  const [st6, setSt6] = useState(0);

  const bcTask7 = React.createRef();
  const [st7, setSt7] = useState(0);

  const [st8, setSt8] = useState(0);
  const inputTask8 = React.createRef();

  const [st9, setSt9] = useState(50);

  const [st10, setSt10] = useState([]);
  const inputTask10 = React.createRef();

  const randomInt = max => {
    const firstNum = Math.floor(Math.random() * max);
    const secondNum = Math.floor(Math.random() * max);
    const thirdNum = Math.floor(Math.random() * max);

    const result = `rgb(${firstNum}, ${secondNum}, ${thirdNum})`;
    return result;
  };

  function task1() {
    const newPhraseTask1 = inputTask1.current.value;
    setSt1(newPhraseTask1);
  }

  function task2() {
    let countTask2 = st2;
    countTask2++;
    setSt2(countTask2);
  }

  function task3(event) {
    setSt3(event.target.value);
  }

  function task4() {
    let countTask4 = st4;
    countTask4++;
    setSt4(countTask4);
  }

  function task5() {
    let checkerTask5 = 0;

    if (refTask5.current.checked) {
      checkerTask5 = refTask5.current.value;
    }

    setSt5(checkerTask5);
  }

  function task6(e) {
    setSt6(e.target.value);
  }

  function task7() {
    bcTask7.current.style.backgroundColor = randomInt(255);
    setSt7(bcTask7.current.style.backgroundColor);
  }

  function task8() {
    const newValue = inputTask8.current.value;
    const strArr = newValue.split('');

    const newStrArr = strArr.map(el => {
      if (Number.isInteger(+el)) {
        return '1';
      } else {
        return '0';
      }
    });

    const newString = newStrArr.join('');

    setSt8(newString);
  }

  function task9(e) {
    setSt9(e.target.value);
  }

  function task10() {
    const newInput = inputTask10.current.value;
    const result = [...st10, newInput];
    setSt10(result);
    inputTask10.current.value = '';
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" ref={inputTask1} />
        <button className="task-1" onClick={task1}>
          Push
        </button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={event => task3(event)} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>
          Count
        </button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5} ref={refTask5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={e => task6(e)}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={bcTask7}></div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8} ref={inputTask8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={(e) => task9(e)}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={inputTask10}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;
