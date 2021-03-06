import './App.css';
import React, { useState } from 'react';

function App() {
  const [t1, setT1] = useState('');
  const [t2, setT2] = useState('');
  const [t3, setT3] = useState('');
  const [t4, setT4] = useState('');
  const [t5, setT5] = useState([]);

  function task1() {
    fetch('http://test1.ua/api.php', {
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

    fetch('http://test1.ua/api.php', {
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

    fetch('http://test1.ua/api.php', {
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

    fetch('http://test1.ua/api.php', {
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

  function task5(event) {
    event.preventDefault();

    fetch('http://test1.ua/api.php', {
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 5 }),
    })
      .then(response => response.text())
      .then(response => {
        return JSON.parse(response);
      })
      .then(response => {
        setT5(response);
      });
  }

  return (
    <>
      <h1>ItGid.info</h1>
      <p></p>
      <hr />
      <div>
        <h2>?????????? ??????????????</h2>
        <button onClick={task1}>GET</button>
        <p>{t1}</p>
      </div>
      <hr />
      <div>
        <h2>?????????????????? ?????????? ??????????</h2>
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
        <h2>???????????????? ??????????</h2>
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
        <h2>?????????????????? ???????????? ????????????????????</h2>
        <form action="" onSubmit={task4}>
          <button type="sumbit">Push</button>
        </form>
        <p>{t4}</p>
        <hr />
      </div>
      <div>
        <h2>?????????????????? ?????????? ??????????</h2>
        <form action="" onSubmit={task5}>
          <button type="sumbit">Push</button>
        </form>
        <ul>{t5.map(el => <li key={el.sale}>{el.ccy} - {el.buy}</li>)}</ul>
      </div>
    </>
  );
}

export default App;
