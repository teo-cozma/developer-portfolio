import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";


import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar/>
        </header>
        <Routes>
          <Route exact path="/developer-portfolio" element={ <Home /> }/>
        </Routes>
        <footer>
            <p>&#169; Teo Cozma - 2022 </p> 
        </footer>
      </Router>
    </div>
  );
}

export default App;
