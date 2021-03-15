import { MESSAGE_ADD_REQUEST, MESSAGE_ADD_SUCCESS, MESSAGE_ADD_FAIL, MESSAGE_READ_REQUEST, MESSAGE_READ_SUCCESS, MESSAGE_READ_FAIL} from "../constants/messageConstants";

function messageAddReducer(state = {}, action) {
    switch (action.type) {
      case MESSAGE_ADD_SUCCESS:
        let messages = state.messages
        return { ...state, messages : [{name:'nat', text: 'yo how are u'}, {name:'Paul', text: 'Good and you'}]};
      case MESSAGE_ADD_FAIL:
        console.log(action.payload.error)
        return { ...state, error: action.payload.error};
      default: return state;
    }
  }

  function messageReadReducer(state = {}, action) {
    switch (action.type) {
      case MESSAGE_READ_REQUEST:
        return { ...state, loading : true};
      case MESSAGE_READ_SUCCESS:
        let messages = state.messages
        return { ...state, messages : action.payload, loading : false};
      case MESSAGE_READ_FAIL:
        return { ...state, error: action.payload.error};
      default: return state;
    }
  }


  export {
    messageAddReducer, messageReadReducer
  }