import React, { useEffect } from "react";
import PokemonInsert from "../components/PokemonInsert";
import { useDispatch, useSelector } from "react-redux";
import { getAllPkm } from "../actions/pkm.action";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pkmListData = useSelector((state) => state.pkmReducer);

  useEffect(() => {
    dispatch(getAllPkm());
  }, []);

  return (
    <div className="page-pokemon-list">
      <ul className="pokemon-list">
        {Array.isArray(pkmListData.results) &&
          pkmListData.results.map((pkm) => (
            <li className="pokemon-list__item" key={pkm.name}>
              <PokemonInsert data={pkm} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PokemonList;
