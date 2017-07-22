import * as types from '../actions/types';

const initialState = {
    eventName: null,
    areaId: null,
    admin: null,
    description: null,
    contactDetails: null,
    loading: false,
    error: null
}

export default (initialState = state, action) => {
    switch (action.type) {
        case 'FETCH_EVENT_REQUEST':
            return { ...state, loading: true }
            break;
        case 'FETCH_EVENT_SUCCESS':
            return {
                ...state,
                eventName: action.data.name,
                description: action.data.description,
                contactDetails: action.data.details,
                admin: action.data.userId,
                loading: false
            }
            break;
        case 'FETCH_EVENT_ERROR':
            return {...state,error: action.error,loading:false}
            break;
            default:
            return state;
    }
}