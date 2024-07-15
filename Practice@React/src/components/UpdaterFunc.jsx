import React, { useState } from "react";
/* updaterFunction --> a function is passed as a arg to setState() usually
                       ex: setState(prevState => prevState + 2)                      
   allow for safe update based on previous state
*/
export default function UpdaterFunc(){
    const [count, setCount]  = useState(0)

    function handleIncrement(){
        /* if i try to update the state again the normal format, it won't update by +2.
         Because in this case we are using current state variable only
         React batches together state updates for performance issue */
        // setCount(count + 1)
        // setCount(count + 1)

        /* Here we are using the pending state to update next state
           React puts our updater function in a queue
           During the next render React will call them in the order */
        setCount(prevC => prevC + 1)
        setCount(prevC => prevC + 1)
        // now the updater function will work
    }

    function handleDecrement(){
        // the below 3 statements will decrement the state value by 1 only not three
        // setCount(count - 1)
        // setCount(count - 1)
        // setCount(count - 1)

        setCount(prevC => prevC - 1)
        setCount(prevC => prevC - 1)
        setCount(prevC => prevC - 1)
        
    }

    function handleReset(){
        setCount(0)
    }
    
    return (
        <div>
            <h1 style={{marginLeft:100}}>{count}</h1>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}