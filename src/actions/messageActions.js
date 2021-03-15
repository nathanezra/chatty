import { MESSAGE_ADD_REQUEST, MESSAGE_ADD_SUCCESS, MESSAGE_ADD_FAIL, MESSAGE_READ_REQUEST, MESSAGE_READ_SUCCESS, MESSAGE_READ_FAIL} from "../constants/messageConstants";
import { db } from '../config/firebase'
import firebase from 'firebase';


const addMessage = (userName, text) => async (dispatch) => {
    let time = firebase.firestore.Timestamp.now()
    db.collection('messages').add({name: userName, text: text, time: time})
    .then((docRef) => {
      dispatch({ type: MESSAGE_ADD_SUCCESS});
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

        db.collection("messages")
            .onSnapshot((data) => {
                let newMessages = []
                data.forEach((doc) => {
                    newMessages.push(doc.data())
                });
                dispatch({ type: MESSAGE_READ_SUCCESS, payload: newMessages})
            });
       
    }catch(error){
        dispatch({ type: MESSAGE_READ_FAIL, payload: error.message })
    }
}
export { addMessage,readMessage };