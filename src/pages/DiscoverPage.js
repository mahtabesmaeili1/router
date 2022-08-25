import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DiscoverPage = () => {
  const [pok, setPok] = useState([]);

  const getPoks = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );
    console.log(response);
    setPok(response.data.results);
  };

  useEffect(() => {
    getPoks();
  }, []);

  console.log("do i have the data in the state?", pok);

  return (
    <div>
      <h3> Discover page</h3>
      <ul>
        {pok.map((pokem, i) => (
          <li key={i}>
            <Link to={`/details/${pokem.name}`}>{pokem.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscoverPage;
