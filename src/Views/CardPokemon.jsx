import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

import "../assets/css/CardPokemon.css";

export default function CardPokemones() {
  const [pokedatos, setpokeDatos] = useState([]);
  const [img, setImg] = useState("");
  const [tipo, setTipo] = useState([]);
  const { name } = useParams();

  const buscarPokemon = async () => {
    const endpoint = "https://pokeapi.co/api/v2/pokemon/";
    const adress = `${endpoint}${name}`;
    const response = await fetch(adress);
    const data = await response.json();
    const getDatos = data.stats;
    setpokeDatos(getDatos);
    setImg(data.sprites.other.dream_world);
    setTipo(data.types);
    console.log(data.types);
  };

  useEffect(() => {
    buscarPokemon();
  }, []);

  return (
    <div>
      <div className="pokecards"  >
        <Card
          className="row justify-content-evenly gap shadow p-3 mb-5 bg-white rounded"
          id="pokecard"
          bg="secondary"
          style={{ width: "30rem", shadow:"10px 10px 5px lightblue" }}
        >
          <div class="col-md-12 text-center">
            <Card.Img
              variant="top"
              style={{ width: "40%" }}
              src={img.front_default}
            />
          </div>
          <Card.Body>
            <Card.Title
              style={{
                textAlign: "center",
                color: "black",
                textTransform: "uppercase",
              }}
            >
              {" "}
              <h1> {name} </h1>{" "}
            </Card.Title>
            <Card.Text style={{ color: "black" }}>
              {pokedatos.map((e) => (
                <ListGroup as="ul" >
                  <ListGroup.Item style={{ color: "black" }} key={e.name}>
                    {e.stat.name}: {e.base_stat}
                  </ListGroup.Item>
                </ListGroup>
              ))}
              {tipo.map((t) => (
                <h3 className="text-center">
                  <ol>
                    <Badge bg="secondary">Tipo: {t.type.name} </Badge>
                  </ol>
                </h3>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}