import { combineReducers } from 'redux';
import TeamsReducer from './TeamsReducers';
import SystemReducer from './SystemReducers';

const rootReducer = combineReducers({
  system: SystemReducer,
  team: TeamsReducer,

})

export default rootReducer;