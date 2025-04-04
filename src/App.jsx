import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Home from './Pages/Home';
import Success from './Pages/Success';
import NotFound from './Pages/NotFound';
import FoodList from './Pages/FoodList';
// swayam

const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/foodList" element={<FoodList />} />
      </Routes>
      <Toaster/>
    </Router>
  )
}


export default App;