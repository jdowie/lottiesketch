import {NAVIGATE_TO_SCREEN} from '../actions/types';

const INITIAL_STATE = {
  activeScreen: 'home',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAVIGATE_TO_SCREEN:
      return {...state, activeScreen: action.payload};
    default:
      return state;
  }
};
