import { MESSAGE_ADD_REQUEST, MESSAGE_ADD_SUCCESS, MESSAGE_ADD_FAIL, MESSAGE_READ_REQUEST, MESSAGE_READ_SUCCESS, MESSAGE_READ_FAIL} from "../constants/messageConstants";
import { db } from '../config/firebase'

const addMessage = (userName, text) => async (dispatch) => {
    db.collection('messages').add({name: userName, text: text})
    .then((docRef) => {
      dispatch({ type: MESSAGE_ADD_SUCCESS, payload: {name: userName, text: text}});
    })
    .catch((error) => {
      dispatch({ type: MESSAGE_ADD_FAIL, payload: error.message });
    });
}

const readMessage = () => async (dispatch) => {
    dispatch({ type: MESSAGE_READ_REQUEST });
    try{
        let messages = []
        let data = await db.collection('messages').get()
        if(data)
            data.docs.map(doc => messages.push(doc.data()));
        else
            throw('Not able to read data')
        dispatch({ type: MESSAGE_READ_SUCCESS, payload: messages});
    }catch(error){
        dispatch({ type: MESSAGE_READ_FAIL, payload: error.message })
    }
}
export { addMessage,readMessage };