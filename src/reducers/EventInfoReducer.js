import * as types from '../actions/types';

const initialState = {
    eventName: '',
    areaId: null,
    admin: '',
    description: '',
    contactDetails: '',
    loading: false,
    error: null
};

export default (initialState = state, action) => {
    switch (action.type) {
    case types.FETCH_EVENT_REQUEST:
        return { ...state, loading: true };
        break;
    case types.FETCH_EVENT_SUCCESS:
        return {
            ...state,
            eventName: action.data.name,
            description: action.data.description,
            contactDetails: action.data.details,
            admin: action.data.userId,
            loading: false
        };
        break;
    case types.FETCH_EVENT_ERROR:
        return {...state,error: action.error,loading:false};
        break;
    default:
        return state;
    }
};