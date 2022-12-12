import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quotes from './Quotes';
import RandomQuotes from './RandomQuotes';
import './App.css';

function App() {
  return (
    
            <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quotes/>}/>
          
        <Route path="/quotes" element={<Quotes />} />
        <Route path="random-quotes" element={<RandomQuotes />} />
          
        
      </Routes>
    </BrowserRouter>
  

     

  );
}

export default App;
