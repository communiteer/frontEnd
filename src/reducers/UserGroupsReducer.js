import * as types from '../actions/types';

const INITIAL_STATE = {
    groups: [],
    loading: false,
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case types.FETCH_USER_GROUPS_REQUEST:
        return { ...state, loading: true };
        break;
    case types.FETCH_USER_GROUPS_SUCCESS:
        return { ...state,...INITIAL_STATE, groups: action.data, loading: false };
        break;
    case types.FETCH_USER_GROUPS_ERROR:
        return { ...state, error: action.error, loading: false };
    default: 
        return state;
    }
};