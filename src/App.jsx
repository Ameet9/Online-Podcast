import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Signup from './components/Signup'
import poly from "./assets/Polygon 1.png";
import About from './components/About';
import mic from "./assets/pngwing 1.png";
import Pricing from './components/Pricing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mainPage'>
        <div className="behind-div">
        </div>
        <div className="behind-div2  rounded-full">
        </div>
        <div >
          <img
            className="triangle"
            src={poly}
            alt="Image 1"
          />
        </div>
        <div >
          <Header />
          <Signup></Signup>
          <div>
            <img
              className="micImg"
              src={mic}
              alt="Image 1"
            />
          </div>
          <About></About>
          <Pricing></Pricing>
        </div>
      </div>
    </>
  )
}

export default App
