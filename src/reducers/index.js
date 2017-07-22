import { combineReducers } from 'redux';
import UserProfileReducer from './UserProfileReducer';
import GroupsInAreaReducer from './GroupsInAreaReducer';

export default combineReducers({
  user: UserProfileReducer,
  groups: GroupsInAreaReducer
})