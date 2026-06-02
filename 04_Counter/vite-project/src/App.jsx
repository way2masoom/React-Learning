import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 15;

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
    console.log("value added", counter);
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    console.log("Value removed", counter);

  }
  return (
    <>
      <section id="center">
        <div>
          <h1>Counter App</h1>
          <br />
          <h2>Current count is = {counter}</h2>
        </div>
        <button type="button" className="counter" onClick={(addValue)}>
          Added Value
        </button>
        <p>counter is not go above 20</p>
        <button type='button' className='counter' onClick={removeValue} >Removed Value</button>
        <p>counter is not go bellow 0</p>
      </section>
    </>
  )


}

export default App
