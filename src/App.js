import Aos from 'aos';
import { useEffect } from 'react';
import './App.css';
import "aos/dist/aos.css";
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  }, [])
  return (
    <div className="max-w-[1400px] mx-auto">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
