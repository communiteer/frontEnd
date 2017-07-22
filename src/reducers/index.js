import { combineReducers } from 'redux';
import UserProfileReducer from './UserProfileReducer';

export default combineReducers({
  user: UserProfileReducer
})