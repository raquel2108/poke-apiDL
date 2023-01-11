import React from "react";
import "../assets/css/Home.css";
import pikachu1 from "../assets/img/pikachu1.png"



export default function Home() {
  return (
    <div className="mt-5 form-cont-home">
      <h1>Bienvenido maestro Pokemón</h1>
      <div className="w-50">
        <img className="form-img" src={pikachu1} alt=""/>
      </div>
    </div>
  );
}