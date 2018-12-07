const thunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    
    // action 
    // x = (dispatch, getState) => (
    //   APIUtil.fetchAllPokemon()
    //     .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
    // )
    return action(dispatch, getState); // makes AJAX request
  }
  // action: 
  // {
  //   type: RECEIVE_ALL_POKEMON,
  //   pokemon
  // }
  return next(action); // pass to next middleware
  // if no middleware left, will hit your reducers (rootReducer)
};

export default thunkMiddleware;