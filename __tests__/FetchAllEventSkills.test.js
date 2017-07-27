import {fetchAllEventSkills} from '../src/actions/FetchAllEventSkills';
import * as types from '../src/actions/types'; 

import nock from 'nock';
import configureMockStore from 'redux-mock-store'; // mock store 
import thunk from 'redux-thunk';
 
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

import {ROOT} from '../config';

describe('async action: FetchAllEventSkills', () => {
    afterEach(() => {
        nock.cleanAll();
    });
    it('dispatches FETCH_EVENT_SKILLS_SUCCESS when fetching is done', () => {
        // creates a fake HTTP response
        nock(ROOT)
            .get('/events/2/skills')
            .reply(200, {
                data: [1, 2, 3]
            });
        
        // Actions we expect to be dispatched
        const expectedActions = [
            { type: types.FETCH_EVENT_SKILLS_REQUEST },
            { type: types.FETCH_EVENT_SKILLS_SUCCESS, data: [1, 2, 3] }
        ];

        // create a fake Redux store
        const store = mockStore({allEvents: { data: [] }});
        // const areaId = 2;
        // dispatch the async action
        return store.dispatch(fetchAllEventSkills(2))
            .then(() => {
                // check that all actions are equal to expected actions
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});