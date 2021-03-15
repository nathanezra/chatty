import { MESSAGE_ADD_REQUEST, MESSAGE_ADD_SUCCESS, MESSAGE_ADD_FAIL, MESSAGE_READ_REQUEST, MESSAGE_READ_SUCCESS, MESSAGE_READ_FAIL} from "../constants/messageConstants";

function messageAddReducer(state = {}, action) {
    switch (action.type) {
      case MESSAGE_ADD_REQUEST:
        return { ...state};
      case MESSAGE_ADD_SUCCESS:
        let messages = state.messages
        console.log('hey', state)
        console.log(messages)
        return { ...state, messages : messages};
      case MESSAGE_ADD_FAIL:
        console.log(action.payload.error)
        return { ...state, error: action.payload.error};
      default: return state;
    }
  }

  function messageReadReducer(state = {}, action) {
    switch (action.type) {
      case MESSAGE_READ_REQUEST:
        return { ...state};
      case MESSAGE_READ_SUCCESS:
        let messages = state.messages
        console.log('hey', state)
        console.log(action.payload)
        return { ...state, messages : action.payload};
      case MESSAGE_READ_FAIL:
        console.log(action.payload.error)
        return { ...state, error: action.payload.error};
      default: return state;
    }
  }


  export {
    messageAddReducer, messageReadReducer
  }