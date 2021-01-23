import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    form: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
    },
    labelfont: {
        fontWeight: 600,
        color: "red",
    }
}))

function Result(){
    const classes = useStyles();
    const history = useHistory();
    const temp = useSelector(state => state.temp)
    if(temp){
        var final_data = JSON.parse(temp)
    }
    
    const handleBack = (e) =>{
       history.push("/")
    }

    return (
    <>
    <form className={classes.form}>
        <Grid container
        spacing = {0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '50vh' }}>

            <Grid item xs = {12} md={12} lg={12}>
            <label className={classes.labelfont}> Celcius </label>
            <br />
                <TextField
                    name="temp_c"
                    value = {final_data ? final_data.cel : ""}
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs = {12} md={12} lg={12}>
            <label className={classes.labelfont}> Fahrenheit </label>
            <br />
                <TextField
                name="temp_f"
                value = {final_data ? final_data.far : ""}
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <Button variant="contained" color="default" 
                style={{minWidth: '150px', minHeight: '30px'}}
                onClick = {handleBack}> 
                Back </Button>
            </Grid>
        </Grid>
    </form>
    </>
)
}

export default Result;

