@@ -0,0 +1,23 @@
/*
reducer is defined here and is exproted.
This reducer should handle all the actions.
Example of how to use reducer is as follows:
const reducer = (state = [],action = {}) => {
  switch(action.type){
    case 'actionType1': 
      return changedState1;
    
    case 'actionType2':
      return changedState2;
    default: 
      return state;
    }
  
export default reducer;
*/
import { combineReducers } from "redux";

const initalState = {
    loggedIn : false,
    username : ''
};
