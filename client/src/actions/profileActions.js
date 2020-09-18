import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_LOADING
  } from "./types";

//Get current profile

export const getCurrentprofile = (id) => dispatch => {
  dispatch(setProfileLoading());
  axios.get(`api/dashboard/user/${id}`)
  .then(res => {
    console.log("I am here in getCurrentprofile");
    console.log(res.data);
     dispatch({
      type:GET_PROFILE,
      payload:res.data.trans,
      balance:res.data.bal
      
    })
    console.log("I am in dispatch - payload ", res.data.trans);
    console.log("I am in dispatch - bal ", res.data.bal);
    console.log("I am in dispatch ", res.data);
    }
    )
    .catch(err => 
      dispatch ({
        type:GET_PROFILE,
        payload:{}
      }))

}



// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};