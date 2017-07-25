import { combineReducers } from 'redux';
import UserProfileReducer from './UserProfileReducer';
import GroupsInAreaReducer from './GroupsInAreaReducer';
import EventsInAreaReducer from './EventsInAreaReducer';
import DisplayGroupPageReducer from './DisplayGroupPageReducer';
import DisplayEventSkillsReducer from './DisplayEventSkillsReducer';
import AddGroupReducer from './AddGroupReducer';

export default combineReducers({
  user: UserProfileReducer,
  groups: GroupsInAreaReducer,
  events: EventsInAreaReducer,
  group: DisplayGroupPageReducer,
  eventSkills: DisplayEventSkillsReducer,
  createGroupForm: AddGroupReducer
})