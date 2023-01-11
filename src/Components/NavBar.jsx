import React from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../assets/css/Navbar.css"
import pokemon from "../assets/img/pokemon.jpg"


export default function NavBar() {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (

      <Navbar className="form-navbar" bg="" variant="">
        <div className="form-cont-img-nav">
          <img className="form-img-nav" src= {pokemon} alt=""/>
        </div>
          <Nav className=" justify-content-end container me-auto" >
              <NavLink className={setActiveClass} to="/">
                  Principal
              </NavLink>
              <NavLink className={setActiveClass} to="/pokemones">
                  Búsqueda de Pokemones
              </NavLink>
            </Nav>
      </Navbar>

    );
}