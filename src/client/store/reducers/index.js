import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import AuthReducer from './auth';

const reducers = combineReducers({
  AuthReducer,
  form: formReducer
});

export default reducers;
