import * as types from '../actions/types';

const initialState = {
    groups: [],
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER_GROUPS_REQUEST:
            return { ...state, loading: true }
            break;
        case types.FETCH_USER_GROUPS_SUCCESS:
            return { ...state, groups: [action.data], loading: false }
            break;
        case types.FETCH_USER_GROUPS_ERROR:
            return { ...state, error: action.error, loading: false }
            default: 
            return state;
    }
}