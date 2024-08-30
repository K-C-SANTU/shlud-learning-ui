import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/welcome';
import Login from './Components/Login';

function App() {
  return (
    <div className='App'> 
    <Greet></Greet>
    <Welcome></Welcome>
    <Login></Login>
    </div>
  );
}

export default App;
