import { combineReducers } from 'redux';
import UserProfileReducer from './UserProfileReducer';
import UserEventsReducer from './UserEventsReducer';

export default combineReducers({
  user: UserProfileReducer,
  userEvents: UserEventsReducer,
  

})