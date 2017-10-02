import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import appLayout from './app-layout';

const reducers = combineReducers({
  appLayout,
  form
});

export default reducers;
