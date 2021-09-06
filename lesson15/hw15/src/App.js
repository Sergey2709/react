import './App.css';
import React, { useState } from 'react';

function App() {
  const [t1, setT1] = useState('');
  const [t2, setT2] = useState('');
  const [t3, setT3] = useState('');
  const [t4, setT4] = useState('');


  function task1() {
    fetch('http://localhost:3500', {
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 1 }),
    })
      .then(response => response.text())
      .then(response => {
        setT1(response);
      });
  }

  function task2(event) {
    event.preventDefault();
    const num1 = event.target[0].value;
    const num2 = event.target[1].value;

    fetch('http://localhost:3500', {
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 2, num1, num2 }),
    })
      .then(response => response.text())
      .then(response => {
        setT2(response);
      });
  }

  function task3(event) {
    event.preventDefault();
    const filename = event.target[0].value;
    const filedata = event.target[1].value;

    fetch('http://localhost:3500', {
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 3, filename, filedata }),
    })
      .then(response => response.text())
      .then(response => {
        setT3(response);
        console.log(response);
      });
  }

  function task4(event) {
    event.preventDefault();

    fetch('http://localhost:3500', {
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 4 }),
    })
      .then(response => response.text())
      .then(response => {
        setT4(response);
      });
  }


  return (
    <>
      <h1>ItGid.info</h1>
      <p></p>
      <hr />
      <div>
        <h2>Время сервера</h2>
        <button onClick={task1}>GET</button>
        <p>{t1}</p>
      </div>
      <hr />
      <div>
        <h2>Случайное число между</h2>
        <form action="" onSubmit={task2}>
          <div>
            <input type="number" name="num1" defaultValue="30" />
          </div>
          <div>
            <input type="number" name="num2" defaultValue="44" />
          </div>
          <button type="sumbit">Push</button>
        </form>
        <p>{t2}</p>
      </div>
      <hr />
      <div>
        <h2>Создание файла</h2>
        <form action="" onSubmit={task3}>
          <div>
            <input type="text" name="filename" />
          </div>
          <div>
            <input type="text" name="filedata" />
          </div>
          <button type="sumbit">Push</button>
        </form>
        <p>{t3}</p>
      </div>
      <hr />
      <div>
        <h2>Получение данных компьютера</h2>
        <form action="" onSubmit={task4}>
          <button type="sumbit">Push</button>
        </form>
        <p>{t4}</p>
        <hr />
      </div>
    </>
  );
}

export default App;
