import React from "react"
import Home from './Home';
import About from './About';
import Contect from './Contect';
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home 
        name ="vikcy"
      />} ></Route>
      <Route path="/contact" element={<Contect/>} ></Route>
      <Route path='/about'element={<About/>} ></Route>
      </Routes>
    </div>
  );
}
export default App;
