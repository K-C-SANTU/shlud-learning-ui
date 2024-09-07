import React, { useContext, useState, createContext } from "react";

// Step 2: Create a Context
const NameContext = createContext();

function UseContextHook() {
  const [data, setData] = useState("Shruti");

  function changeName() {
    setData("Shruti Gataraddihal");
  }

  return (
    // Step 3: Provide the context to child components
    <NameContext.Provider value={{ data, changeName }}>
      <h1>UseContext Hook Example</h1>
      <Display />
      <ChangeButton />
    </NameContext.Provider>
  );
}

// Step 4: Consume the context in a child component to display the name
function Display() {
  const { data } = useContext(NameContext);
  return (
    <>
      firstName: {data} printed here
      <br />
    </>
  );
}

// Step 5: Consume the context in another child component to change the name
function ChangeButton() {
  const { changeName } = useContext(NameContext);
  return <button onClick={changeName}>Change Name</button>;
}

export default UseContextHook;
