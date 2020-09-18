import {GET_PROFILE , PROFILE_LOADING} from '../actions/types';

const initialState = {
    profile: [],
    AccBal:0,
     loading: false
  }


  export default function(state = initialState, action) {

    switch(action.type) {
      case PROFILE_LOADING:
        return{
          ...state,
          loading:true
        };
        case GET_PROFILE:
          {

            console.log("I am in the case of get_profile");
            return{
              ...state,
              profile:action.payload,
              AccBal:action.balance,
              loading:false
        
            };
          }

        default:
            return state;
    }



  }