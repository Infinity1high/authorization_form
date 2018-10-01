import { createStore } from 'redux';

import reducers from './reducers';
import middleware from './middleware';

const store = createStore(
  reducers,
  undefined,
  middleware
);

console.log(store.getState());

export default store;
