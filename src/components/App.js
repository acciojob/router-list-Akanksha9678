
import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/item1" element={<Item1/>}></Route>
        <Route path="/item2" element={<Item2/>}></Route>
        <Route path="/item3" element={<Item3/>}></Route>
      </Routes>

        {/* Do not remove the main div */}
    </div>
  )
}

export default App
