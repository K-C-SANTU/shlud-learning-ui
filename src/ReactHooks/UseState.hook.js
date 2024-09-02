import { useState } from "react";

function UseStateHook() {
  console.log(1);
  const [data, kc] = useState("Shruti");
  //   let firstName = "KC";
  console.log(2);
  function changeName() {
    // data = "GOMBEEE111";
    kc("GOMBEEEE");
  }
  console.log(3);
  return (
    <>
      {/* {data} */}
      firstName: {data} printered here
      <br />
      <button onClick={() => changeName()}>Change Name</button>
    </>
  );
}

export default UseStateHook;

