import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function Title(props) {
    return (
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message">{props.title}</Typography>
            </Grid>
        </Grid>
    )
  }

  
export default Title;