import {combineReducers} from 'redux';

import NavigationReducer from './NavigationReducer';

export default combineReducers({
  navigation: NavigationReducer,
});
