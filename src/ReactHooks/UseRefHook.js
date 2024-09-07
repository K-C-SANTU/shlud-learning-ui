import { useRef } from "react";

function UseRefHook() {
  const dataRef = useRef("Shruti");

  function changeName() {
    dataRef.current = "Shruti Gataraddihal";
    // Re-render the component manually if necessary (React doesn't re-render automatically with useRef).

    console.log(dataRef.current);
  }

  return (
    <>
      <h1>UseRef Hook Example</h1>
      firstName: {dataRef.current} printed here
      <br />
      <button onClick={() => changeName()}>Change Name</button>
    </>
  );
}

export default UseRefHook;
