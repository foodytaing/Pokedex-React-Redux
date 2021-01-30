import React, { useState, useEffect } from "react";
import axios from "axios";

const Index = (props) => {
  const { data } = props;
  const [pkm, setPkm] = useState({});

  useEffect(() => {
    axios
      .get(data.url)
      .then((res) => {
        setPkm(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="pokemon-insert">
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
