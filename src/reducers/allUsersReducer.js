import { USERS_READ_REQUEST, USERS_READ_SUCCESS, USERS_READ_FAIL} from "../constants/allUsersConstants";


  function getAllUsersReducer(state = {}, action) {
    let messages = state.messages
    switch (action.type) {
      case USERS_READ_REQUEST:
        return { ...state, loading : true};
      case USERS_READ_SUCCESS:
        return { ...state, messages : action.payload, loading : false};
      case USERS_READ_FAIL:
        return { ...state, error: action.payload.error};
      default: return state;
    }
  }


  export {
    getAllUsersReducer  }