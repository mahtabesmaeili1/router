import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const AllPokemons = () => {
  const params = useParams();
  const [poke, setPoke] = useState("");

  const getPok = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.pokemon_name}`
    );
    setPoke(response.data);
  };
  useEffect(() => {
    getPok();
  }, []);

  console.log("do i get poke data?", poke);
  console.log("what are params?", params);
  return poke ? (
    <div>
      <h3>Details</h3>
      <h3>{params.pokemon_name}</h3>
      <img src={poke.sprites.front_default} />
      <p>
        Types:
        {poke.types.map((poke) => (
          <span>{poke.type.name} </span>
        ))}
      </p>
      <p>Weight: {poke.weight} hectograms</p>
    </div>
  ) : (
    <p> failed!</p>
  );
};

export default AllPokemons;
