import Aos from 'aos';
import { useEffect } from 'react';
import './App.css';
import Home from './Pgaes/Home/Home';
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  }, [])
  return (

    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
