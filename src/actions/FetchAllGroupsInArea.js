import * as types from './types'
import { ROOT } from '../../config.js';
import axios from 'axois'

 // [SEARCH] FETCH ALL GROUPS IN AREA
export function fetchAllGroupsInArea() {
  return function (dispatch) {
    dispatch(fetchGroupRequest());
    axios.get(`${ROOT}/groups/area/:area`)
      .then(res => {
        //receive data
        dispatch(fetchGroupSuccess(res.data.groups))
      })
      .catch(err => {
        dispatch(fetchGroupError(err))
      })
  }
}

 export function fetchGroupRequest () {
   return {
     type: types.FETCH_GROUP_BY_AREA_REQUEST
   };
 }

  export function fetchGroupSuccess (groups) {
   return {
     type: types.FETCH_GROUP_BY_AREA_SUCCESS,
     data: groups
   };
 }

  export function fetchGroupError (error) {
   return {
     type: types.FETCH_GROUP_BY_AREA_ERROR,
     data: error
   };
 }
  