import {Provider} from 'react-redux';
import React from 'react';
import {App} from './components/app';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';

export default ({store}) => {
  console.log(store);
  return (
    <Provider store={store} >
      <App />
      <PokemonIndexContainer/>
    </Provider>
  );
};