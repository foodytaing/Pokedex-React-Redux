import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// import Pages
import PokemonList from "../pages/PokemonList";
import PokemonDetail from "../pages/PokemonDetail";
import Error404 from "../pages/Error404";

const index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PokemonList} />
        <Route path="/pokemonlist" exact component={PokemonList} />
        <Route path="/pokemondetail" exact component={PokemonDetail} />
        <Route path="/error404" exact component={Error404} />
        <Redirect to="/error404" />
      </Switch>
    </Router>
  );
};

export default index;
