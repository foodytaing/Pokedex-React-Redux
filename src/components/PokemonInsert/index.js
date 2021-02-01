import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import axios from "axios";

const Index = (props) => {
  const { data } = props;
  const [pkm, setPkm] = useState(null);

  const url = "https://pokeapi.co/api/v2/pokemon/" + data.name;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const newData = {
          name: res.data?.name,
          type:
            (Array.isArray(res.data?.types) &&
              res.data?.types[0]?.type?.name) ||
            "",
          sprite: res.data?.sprites?.front_default,
        };

        setPkm(newData);
      })
      .catch((err) => console.log(err));

    if (!pkm) {
      return null;
    }
  }, []);

  return (
    <>
      <div className={`pokemon-insert_${pkm?.type} pokemon-insert`}>
        <span className="pokemon-insert__name">{pkm?.name}</span>
        <LazyLoad>
          <img
            className="pokemon-insert__image"
            src={pkm?.sprite}
            alt={pkm?.name}
          />
        </LazyLoad>
      </div>
    </>
  );
};

export default Index;
