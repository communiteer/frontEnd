import * as types from '../actions/types';

const INITIAL_STATE = {
	user_fName: '',
	user_lName: '',
  // area needs to be number to match area id in database
  area: null,
	phone: null,
	email: '',
  profilePicture: '',
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_USER_INFO_REQUEST:
      return { ...state, loading: true, error: ''}
    
    case types.FETCH_USER_INFO_SUCCESS:
      return { 
        ...state, 
        ...INITIAL_STATE, 
        user_fName: action.data.user_fName,
        user_lName: action.data.user_lName,
        area: action.data.area,
        phone: action.data.phone,
        email: action.data.email,
        profilePicture: action.data.profilePicture,
        loading: false 
      }

    case types.FETCH_USER_INFO_ERROR:
      return { ...state, error: 'Encountered an error'}
    
    default:
      return state
  }
}