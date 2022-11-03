import * as React from 'react';
import Box from '@mui/material/Box';
import useStyles from './styles'

const TextField = (props) => {

    const classes = useStyles()

    return (
        <div className={classes.container}>
             <input type='text' className={classes.textField} {...props}  />
        </div>
       
    );
}

export default TextField;