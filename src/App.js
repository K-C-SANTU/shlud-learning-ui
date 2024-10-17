import { useState } from "react";

// function App(){
//   const [color , setColor] =useState("Sky Blue");
//   return (
//     <>
//     <h1>My fav color is {color}</h1>
//     <button type="button" onClick={()=>setColor("pink")}>Click Me</button>
//   </>
//   )
// }

//Create multiple state Hooks:
    // export function Car() {
    //   const [brand, setBrand] = useState("Ford");
    //   const [model, setModel] = useState("Mustang");
    //   const [year, setYear] = useState("1964");
    //   const [color, setColor] = useState("red");

    //   return (
    //     <>
    //       <h1>My {brand}</h1>
    //       <p>
    //         It is a {color} {model} from {year}.
    //       </p>
    //     </>
    //   )
    // }
//======================================================================
//Create a single Hook that holds an object:
    // function App(){
    //   const [car , setCar] = useState({
    //     brand:"ford",
    //     model:"Mustang",
    //     year:"1998",
    //     color:"red"
    //   });

    //   return<>
    //     <h1>My Car Brand is {car.brand}</h1>
    //     <p>
    //       My Car is {car.brand} brand, which is in {car.color} color, {car.model} model and launched in the year {car.year}.
    //     </p>
    //   </>
    // }
// ==========================================================
    // function FavoriteColor(){
    //     const [color, setColor] =useState("red");

    //     return <>
    //     <h1>My Fav color is {color}</h1>
    //     <button onClick={()=>setColor("blue")}>Blue</button>
    //     <button onClick={()=>setColor("green")}>Green</button>
    //     <button onClick={()=>setColor("skyblue")}>Skyblue</button>
    //     </>
    // }
//=============================================================
    function Car(){
      const [car, setCar] = useState({
        brand:"Ford",
        model:"Mustang",
        color:"red",
        year:"1998"
      });
      const updateColor = () => {
        setCar(previousState =>{
          return { ...previousState, color:"blue"}
        })
      }
      return<>
      <h1>my car is {car.color}</h1>
      <button type= "button" onClick={updateColor}>Blue</button>
      </>
    }
export default Car;
