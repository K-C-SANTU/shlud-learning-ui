import { useState } from "react";

function UseStateHook() {
  const [data, setData] = useState("Shruti");

  function changeName() {
    setData("Shruti Gataraddihal");
  }
  return (
    <>
    <h1>UseState Hook Example</h1>
      firstName: {data} printered here
      <br />
      <button onClick={() => changeName()}>Change Name</button>
     {/* <button onClick={changeName}>Changed Name</button> */}
    </>
  );
}

export default UseStateHook;
