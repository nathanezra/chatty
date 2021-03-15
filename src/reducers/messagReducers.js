import { MESSAGE_ADD_REQUEST, MESSAGE_ADD_SUCCESS, MESSAGE_ADD_FAIL} from "../constants/messageConstants";

function messageAddReducer(state = {}, action) {
    switch (action.type) {
      case MESSAGE_ADD_REQUEST:
        return { loading: true };
      case MESSAGE_ADD_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case MESSAGE_ADD_FAIL:
        return { loading: false, error: action.payload };
      case USER_LOGOUT:
        return {};
      default: return state;
    }
  }

  export {
    messageAddReducer
  }