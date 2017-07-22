import * as types from './types'
import { ROOT } from '../../config.js';
import axios from 'react-native-axios'


export function fetchEventsInArea() {
  return function (dispatch) {
    dispatch(fetchEventsInAreaRequest());
    axios.get(`${ROOT}/events/area/:area`)
      .then(res => {
        //receive data
        dispatch(fetchEventsInAreaSuccess(res.data.events))
      })
      .catch(err => {
        dispatch(fetchEventsInAreaError(err))
      })
  }
}

 export function fetchEventsInAreaRequest () {
   return {
     type: types.FETCH_EVENT_IN_AREA_REQUEST
   };
 }

  export function fetchEventsInAreaSuccess (events) {
   return {
     type: types.FETCH_EVENT_IN_AREA_SUCCESS,
     data: events
   };
 }

  export function fetchEventsInAreaError (error) {
   return {
     type: types.FETCH_EVENT_IN_AREA_ERROR,
     data: error
   };
 }