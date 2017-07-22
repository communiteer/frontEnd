import * as types from '../actions/types';

const INITIAL_STATE = {
 userEvents = [];
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_USER_INFO_REQUEST:
      return 
    
    case types.FETCH_USER_INFO_SUCCESS:
      return

    case types.FETCH_USER_INFO_ERROR:
      return
    
    default:
      return state
  }
}