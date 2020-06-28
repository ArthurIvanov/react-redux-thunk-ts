import { combineReducers } from "redux";

import { pokemonReducer } from "./pokemon.reducer";

export const rootReducer = combineReducers({
  pokemon: pokemonReducer
});
