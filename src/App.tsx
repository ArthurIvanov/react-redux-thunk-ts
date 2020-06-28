import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rootStore } from "./store";

import { getPokemon } from "./actions/pokemon.action";

import "./styles.css";

export const App: FC = () => {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(event.target.value);
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getPokemon(pokemonName));
  };
  const pokemonState = useSelector((state: rootStore) => state.pokemon);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <div>
        {pokemonState.pokemon && (
          <div>
            <div>
              {pokemonState.pokemon.abilities.map(ability => {
                return <p>{ability.ability.name}</p>;
              })}
            </div>
            <img src={pokemonState.pokemon.sprites.front_default} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};
