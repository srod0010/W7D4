import React from "react";
import ReactDOM from "react-dom";
import { fetchAllPokemon } from "./util/api_util";
import { receiveAllPokemon } from "./actions/pokemon_actions";
import { configureStore } from './store/store';
import Root from './root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  window.store = store;
  ReactDOM.render(<Root store={store}/>, rootEl);
});


window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
