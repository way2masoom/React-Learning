import { useState } from 'react';


function Counter() {
    const [counter, setCounter] = useState(15);

    const addValue = () => {
    /**
   * Interview Question:
   *
   * setCounter(counter + 1);
   * setCounter(counter + 1);
   * setCounter(counter + 1);
   *
   * Result: Counter increases by only 1.
   *
   * Reason:
   * React batches state updates, so all three calls
   * use the same old value of counter.
   *
   * To update based on the latest state, use:
   *
   * setCounter(prev => prev + 1);
   *
   * Here, 'prev' is the most recent state value,
   * so three calls increase the counter by 3.
   */

        setCounter(counter => counter + 1);
        setCounter(counter => counter + 1);
        setCounter(counter => counter + 1);
        console.log("value added", counter);
    }

    const removeValue = () => {

        setCounter(counter => counter - 1);
        setCounter(counter => counter - 1);
        setCounter(counter => counter - 1);
        console.log("Value removed", counter);

    }

    return (
        <>
            <section id="center">
                <div>
                    <h1>Interview Counter App </h1>
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
export default Counter;