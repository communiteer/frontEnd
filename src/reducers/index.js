import { combineReducers } from 'redux';
import UserProfileReducer from './UserProfileReducer';

import GroupsInAreaReducer from './GroupsInAreaReducer';
import EventsInAreaReducer from './EventsInAreaReducer';
import DisplayGroupPageReducer from './DisplayGroupPageReducer';
import DisplayEventSkillsReducer from './DisplayEventSkillsReducer';
import UserEventsReducer from './UserEventsReducer';

export default combineReducers({
  user: UserProfileReducer,
  groups: GroupsInAreaReducer,
  userEvents: UserEventsReducer,
  events: EventsInAreaReducer,
  group: DisplayGroupPageReducer,
  eventSkills: DisplayEventSkillsReducer

})