import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Menu} from "./components/menu/Menu";
import './styles/Menu.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Main} from "./components/main/Main";
import {Price} from "./components/price/Price";
import {Contacts} from "./components/contacts/Contacts";
import {About} from "./components/about/About";


function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/price" element={<Price/>} />
          </Routes>
        </Router>
      </>

  );
}

export default App;
