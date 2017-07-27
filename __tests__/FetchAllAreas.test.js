import {fetchAllAreas} from '../src/actions/FetchAllAreas';
import * as types from '../src/actions/types'; 

import nock from 'nock';
import configureMockStore from 'redux-mock-store'; // mock store 
import thunk from 'redux-thunk';
 
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

import {ROOT} from '../config';

describe('async action: FetchAllAreas', () => {
    afterEach(() => {
        nock.cleanAll();
    });
    it('dispatches FETCH_ALL_AREAS_SUCCESS when fetching is done', () => {
        // creates a fake HTTP response
        nock(ROOT)
            .get('/areas')
            .reply(200, {
                areas: [1, 2, 3]
            });
        
        // Actions we expect to be dispatched
        const expectedActions = [
            { type: types.FETCH_ALL_AREAS_REQUEST },
            { type: types.FETCH_ALL_AREAS_SUCCESS, data: [1, 2, 3] }
        ];

        // create a fake Redux store
        const store = mockStore({allAreas: { areas: [] }});
        
        // dispatch the async action
        return store.dispatch(fetchAllAreas())
            .then(() => {
                // check that all actions are equal to expected actions
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});
