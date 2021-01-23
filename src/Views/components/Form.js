import React, { useState } from 'react';
import { Grid, TextField, Select, FormControl, MenuItem, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import check_temp from './Action';

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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    labelfont: {
        fontWeight: 600,
        color: "red",
        textAlign: "left"
    },
    size: {
        minWidth: '270px', minHeight: '30px'
    }
}))

function Form(){
    const classes = useStyles();
    const [city, setCity] = useState("Kuala Lumpur")
    const history = useHistory();
    const dispatch = useDispatch();
    const API_key = "ff9f895b2e884d6680530135202710"

    const handleChange = (e)=>{
        setCity(e.target.value)
    }

    const handleSubmit = () =>{
        dispatch(check_temp(city))
        history.push("/result")
    }

    return (
        <>
    <form className={classes.form}>
        <Grid container
        spacing = {1}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '90vh'}}>
            <Grid item xs = {12} md={12} lg={12}>
            <label className={classes.labelfont}> Your API Key </label> 
            <br />
                <TextField
                    id="api_key"
                    defaultValue={API_key}
                    className={classes.size}
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs = {12} md={12} lg={12}>
            <label className={classes.labelfont}> City Name </label>
            <br />
            <FormControl className={classes.formControl}>
                <Select
                    value={city}
                    onChange={handleChange}
                    // onChange={(e)=>handleChange(e.target.value)}
                    className={classes.size}
                >
                <MenuItem value={"Kuala Lumpur"}>Kuala Lumpur</MenuItem>
                <MenuItem value={"Singapore"}>Singapore</MenuItem>
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <Button variant="contained" color="secondary" 
                className={classes.size}
                onClick={handleSubmit}> 
                Submit </Button>
            </Grid>
        </Grid>
    </form>
    </>
)
}

export default Form;

