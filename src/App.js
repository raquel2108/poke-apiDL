import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Views/Home";
import Pokesearch from "./Views/PokeSearch";
import CardPokemones from "./Views/CardPokemon";
import Footer from "./Components/Footer";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<Pokesearch />} />
            <Route path="/pokemones/:name" element={<CardPokemones />} />
            
          </Routes>
          <Footer/>
        </BrowserRouter>     

  )
}

export default App;
