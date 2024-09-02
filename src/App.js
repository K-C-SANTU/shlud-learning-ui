import { Button, Stack } from "@mui/material";
import UseStateHook from "./ReactHooks/UseState.hook";
// handling promisses 
let interval;
const App = () => {
  const testing = async () => {
    // console.log("1");
    // await fetch('https://dummyjson.com/users').then((res)=>{
    //   console.log(2);
    // })
    // console.log(3);

    // const timeOut =  setTimeout(()=>{
    //   console.log("4")
    // },3000)

    // clearTimeout(timeOut);

    let count = 1;
    clearInterval(interval);
    interval = setInterval(()=>{
      console.log("interval ", count++);
    },1000)
    // clearInterval(interval);
    // console.log("5")

  };

  return (
    <Stack spacing={2} direction="column">
      {/* <Button variant="outlined" onClick={testing}>
        testing
      </Button> */}
      <UseStateHook />
      
    </Stack>
  );
}

export default App;
