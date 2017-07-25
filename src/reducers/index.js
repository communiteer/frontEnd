import { combineReducers } from 'redux';
import UserProfileReducer from './UserProfileReducer';
import UserEventsReducer from './UserEventsReducer';
import UserGroupsReducer from './UserGroupsReducer';
import UserNotificationsReducer from './UserNotificationsReducer';

export default combineReducers({
  user: UserProfileReducer,
  events: UserEventsReducer,
  groups: UserGroupsReducer,
  notifications: UserNotificationsReducer
})