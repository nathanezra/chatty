import React, { useState, useEffect } from 'react';

import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


function SendMessageForm (props) {

  const [message, setMessage] = useState('');

  let handleSubmit = (e) => {
        e.preventDefault()
        props.sendMessage(message)
        setMessage('')
      }

  let handleChange = (e) => setMessage(e.target.value)


    
      return (
        <Grid container style={{padding: '20px'}}>
            <Grid item xs={11}>
                <TextField id="outlined-basic-email" onChange={handleChange} value={message} label="Type Something" fullWidth/>
            </Grid>
            <Grid xs={1} align="right">
                <Fab color="primary" aria-label="add" onClick={handleSubmit}><SendIcon /></Fab>
            </Grid>
        </Grid>
      )
  }

  export default SendMessageForm;