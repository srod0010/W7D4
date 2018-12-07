export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
import * as APIUtil from '../util/api_util';

// ACTION CREATOR
// It's a function, that when invoked we get an action back
//
// Our action is a POJO
// receiveAllPokemon() ---> {type: RECEIVE_ALL_POKEMON, pokemon: {...}}
export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});


// ACTION CREATOR
// It's a function, that when invoked we get an action back
//
// Our action is a FUNCTION
// requestAllPokemon() ---> function (dispatch) { DOES THE AJAX REQUEST } 
export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon() // returns a Promise
    // dispatches a POJO action, which will hit thunk (which doesn't care) --> rootReducer
    .then(
      pokemon => dispatch(receiveAllPokemon(pokemon))

    )
);

// dispatch(requestAllPokemon());
// dispatch((dispatch) => (
//   APIUtil.fetchAllPokemon()
//     .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
// )))

// Dispatch -> a way to tell the store to update 
// How does it know how to update? The action tells it how to update 

// Dispatch(action) ---action---> MIDDLEWARE (thunk) ???-----> reducers 
//
// A: 
// dispatch(function action) ----> thunk (action IS function) thunk invokes it 
//
// B: 
// dispatch(POJO action) --------> thunk (action IS NOT function) thunk doesn't care -----> reducers









