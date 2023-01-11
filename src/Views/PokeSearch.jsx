import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "../assets/css/Pokemones.css";
import ash1 from "../assets/img/ash1.png"


export default function Pokemones() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [pokemones, setPokemones] = useState([]);

  const consultarApi = async () => {
    const endpoint = "https://pokeapi.co/api/v2/pokemon";
    const apiend = endpoint;
    const response = await fetch(apiend);
    const data = await response.json();
    const getName = data.results.map(({ name }) => ({ name }));
    setPokemones(getName);
  };

  useEffect(() => {
    consultarApi();
  }, []);

  const irAlPokemon = () => {
    navigate(`/pokemones/${name}`);
  };

  return (
    <div className="mt-5 form-cont-pok">
      <h1>Selecciona un pokemón</h1>
      <div className="form-cont-select">
        <Form.Select
          onChange={(e) => setName(e.target.value)}
          aria-label="Default select example"
        >
          <option value="" hidden>
            Pokemones disponibles
          </option>
          {pokemones.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </Form.Select>
      </div>
      <button className="form-button" onClick={irAlPokemon}>
        Ver detalle del pokemón seleccionado
      </button>
      <hr />
      <div className="">
        <img className="form-img"  src={ash1} alt=""/>
      </div>
    </div>
  );
}