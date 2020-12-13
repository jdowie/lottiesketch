/* Setting up a basic app using a Redux store */
/* MovieList contains the core functionality */

import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from './src/reducers';
import {createStore} from 'redux';

import LottieSketch from './src/components/LottieSketch';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <LottieSketch />
    </Provider>
  );
};

export default App;
