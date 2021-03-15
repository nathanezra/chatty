import React from 'react';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


class SendMessageForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
           message: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
          message: ''
        })
      }

    handleChange = (e) => {
        this.setState({
          message: e.target.value
        })
      }

    
    render() {
      return (
        <Grid container style={{padding: '20px'}}>
            <Grid item xs={11}>
                <TextField id="outlined-basic-email" label="Type Something" fullWidth />
            </Grid>
            <Grid xs={1} align="right">
                <Fab color="primary" aria-label="add"><SendIcon /></Fab>
            </Grid>
        </Grid>
      )
    }
  }

  export default SendMessageForm;