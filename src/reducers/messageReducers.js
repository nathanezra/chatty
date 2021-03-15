import { MESSAGE_ADD_SUCCESS, MESSAGE_ADD_FAIL, MESSAGE_READ_REQUEST, MESSAGE_READ_SUCCESS, MESSAGE_READ_FAIL} from "../constants/messageConstants";


  function messageReducer(state = {}, action) {
    let messages = state.messages
    switch (action.type) {
      case MESSAGE_READ_REQUEST:
        return { ...state, loading : true};
      case MESSAGE_READ_SUCCESS:
        return { ...state, messages : action.payload, loading : false};
      case MESSAGE_READ_FAIL:
        return { ...state, error: action.payload.error};
      case MESSAGE_ADD_SUCCESS:
          messages.push(action.payload)
        return { ...state, messages : messages};
      case MESSAGE_ADD_FAIL:
        console.log(action.payload.error)
        return { ...state, error: action.payload.error};
      default: return state;
    }
  }


  export {
    messageReducer  }