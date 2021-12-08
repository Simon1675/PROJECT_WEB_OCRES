import React from 'react';
import './App.css';
import Home from './pages/Home';
import Idees from './pages/Idees';
import {BrowserRouter as Router, Routes , Route ,} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/idees" element={<Idees/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
