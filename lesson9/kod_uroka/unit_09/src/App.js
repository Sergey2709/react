import logo from './logo.svg';
import './App.css';
import Button from './Button';
import ButtonHook from './ButtonHook';
import DataLoader from './DataLoader';
import DataLoaderHook from './DataLoaderHook';

function App() {
  return (
    <>
      <Button />
      <hr />
      <ButtonHook />
      <hr />
      <DataLoader />
      <hr />
      <DataLoaderHook />
    </>
  );
}

export default App;
