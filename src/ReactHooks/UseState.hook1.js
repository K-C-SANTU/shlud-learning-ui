import React, { useState }from "react"

const Ushook =() => {
    const array = useState(0);
    const counter = array[0]
    const setCounter = array[1]

    function increaseCounter(){
        setCounter(counter + 1)
    }
    console.log(array);
    return (
        <div>
            <h1>UseState Hook Example</h1>
            <h2>Counter: {counter}</h2>
            <button onClick={increaseCounter}>Increase</button>
        </div>
    )
}
export default Ushook
