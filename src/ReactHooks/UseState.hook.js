import { useState } from "react";

function UseStateHook() {
  const [data, setData] = useState("Shruti");

  function changeName() {
    setData("GOMBEEEE");
  }
  return (
    <>
      firstName: {data} printered here
      <br />
      <button onClick={() => changeName()}>Change Name</button>
      //<button onClick={changeName}>Changed Name</button>
    </>
  );
}

export default UseStateHook;
