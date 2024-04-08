
import { useState } from 'react';
import './App.css';

function App() {

  let [a, setA] = useState(1)

  const onClickHandler = () => {
    setA(++a)
    
  }
  const onClickHandler0 = () => {
    setA(a=0)
    
  }


  return (

    <div>
      <h1>{a}</h1>
      <button onClick={onClickHandler}>number</button>
      <button onClick={onClickHandler0}>0</button>
    </div>

  );
}

export default App;
