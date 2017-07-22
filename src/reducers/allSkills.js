import * as types from '../actions/types';

const initialState = {
    skills:[],
    loading: false,
    error: null
}

export default (initialState = state, action) => {
    switch (action.type) {
        case 'FETCH_ALL_SKILLS_REQUEST':
            return { ...state, loading: true }
            break;
        case 'FETCH_ALL_SKILLS_SUCCESS':
            return {
                ...state,
                skills: [action.data],
                loading: false
            }
            break;
        case 'FETCH_ALL_SKILLS_ERROR':
            return {...state,error: action.error,loading:false}
            break;
            default:
            return state;
    }
}