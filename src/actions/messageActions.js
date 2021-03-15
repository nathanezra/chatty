import { MESSAGE_ADD_REQUEST, MESSAGE_ADD_SUCCESS, MESSAGE_ADD_FAIL} from "../constants/messageConstants";
import { db } from '../config/firebase'

const addMessage = (userName, text) => async (dispatch) => {
    dispatch({ type: MESSAGE_ADD_REQUEST });
    db.collection('messages').add({name: userName, text: text})
    .then((docRef) => {
      dispatch({ type: MESSAGE_ADD_SUCCESS, payload: {name: userName, text: text}});
    })
    .catch((error) => {
      dispatch({ type: MESSAGE_ADD_FAIL, payload: error.message });
    });
}
export { addMessage };