import {Provider} from 'react-redux';
import React from 'react';
import {App} from './components/app';

export default ({store}) => {
  console.log(store);
  return (
    <Provider store={store} >
      <App />
    </Provider>
  );
};