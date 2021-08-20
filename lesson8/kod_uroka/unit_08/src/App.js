import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  const cE = React.createElement;
  const title = React.createElement('h1', {}, 'Text Header 1');
  const title2 = React.createElement('h2', {
    'color': 'red',
    'style': {
      'color': 'red',
      'background': 'orange'
    },
    'id': 'hide',
    'className': 'italic bold'
  }, 'Text Header 2');
  const s = cE('span', {}, "this is a span")
  const example = cE('p', {}, s);

  return (
    <>
      <React.Fragment>
        Hello
      </React.Fragment>
      {title}
      <div>
        {title2}
      </div>
      <div>{cE('input', {})}</div>
      <div>{example}</div>
    </>
  );
}

export default App;
