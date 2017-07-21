import * as types from './types'
import { ROOT } from '../../config.js';
import axios from 'axois'


export function fetchUserData() {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    // go get data through fetch request
    axios.get(`${ROOT}/users/:id`)
      .then(res => {
        //receive data
        dispatch(fetchUserSuccess(res.data.user))
      })
      .catch(err => {
        dispatch(fetchUserError(err))
      })
  }
}


 export function fetchUserRequest () {
   return {
     type: types.FETCH_USER_INFO_REQUEST
   };
 }

  export function fetchUserSuccess (user) {
   return {
     type: types.FETCH_USER_INFO_SUCCESS,
     data: user
   };
 }

  export function fetchUserError (error) {
   return {
     type: types.FETCH_USER_INFO_ERROR,
     data: error
   };
 }
