import React, { useState, useEffect } from "react";
import axios from "axios";

const Index = (props) => {
  const { data } = props;
  const [pkm, setPkm] = useState({});

  const url = "https://pokeapi.co/api/v2/pokemon/" + data.name;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPkm(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const pkmTypeClass = pkm?.types[0]?.type?.name || "";

  return (
    <>
      <div className={`pokemon-insert_${pkmTypeClass} pokemon-insert`}>
        <span className="pokemon-insert__name">{pkm?.name}</span>
        <img
          className="pokemon-insert__image"
          src={pkm?.sprites?.front_default}
          alt={pkm?.name}
        />
      </div>
    </>
  );
};

export default Index;
