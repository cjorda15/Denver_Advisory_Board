import { combineReducers } from 'redux';
import user from './user';
import events from './events';
import personalEvents from './personalEvents';

const rootReducer = combineReducers({
  user,
  events,
  personalEvents
});

export default rootReducer;
