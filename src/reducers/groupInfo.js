import * as types from '../actions/types';

const initialState = {
    groupName: null,
    areaId: null,
    admin: null,
    description: null,
    contactDetails: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_GROUP_INFO_REQUEST':
            return { ...state, loading: true }
            break;
        case 'FETCH_GROUP_INFO_SUCCESS':
            return {
                ...state,
                groupName: action.data.name,
                description: action.data.description,
                contactDetails: action.data.details,
                admin: action.data.userId,
                loading: false
            }
            break;
        case 'FETCH_GROUP_INFO_ERROR':
            return {...state,error: action.error,loading:false}
            break;
            default:
            return state;
    }
}


