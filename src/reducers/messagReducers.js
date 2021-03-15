import { MESSAGE_ADD_REQUEST, MESSAGE_ADD_SUCCESS, MESSAGE_ADD_FAIL} from "../constants/messageConstants";

function messageReducer(state = {}, action) {
    switch (action.type) {
      case MESSAGE_ADD_REQUEST:
        return { ...state};
      case MESSAGE_ADD_SUCCESS:
        let messages = state.messages
        messages.push({name: action.name, text: action.text})
        console.log(messages)
        return { ...state, messages : messages};
      case MESSAGE_ADD_FAIL:
        return { };
      case USER_LOGOUT:
        return {};
      default: return state;
    }
  }

  export {
    messageReducer
  }