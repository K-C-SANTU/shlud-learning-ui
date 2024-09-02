import React, { useState }from "react"

const Ushook =() => {
    // const array = useState(0);
    // const counter = array[0]
    // const setCounter = array[1]
    const [counter, setCounter]= useState(0);

    function increaseCounter(){
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>UseState Hook </h1>
            <h2>Counter: {counter}</h2>
            <button onClick={increaseCounter}>Increase</button>
        </div>
    )
}
export default Ushook
