
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import React, { useState } from 'react';
import axios from 'axios';
import {ToastsContainer, ToastsStore} from 'react-toasts';

/**
 * @summary Styling component should be in css in future work..
 */

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function RegistrationForm(props) {
    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();

        sendDetailsToServer(props);
        updates(props);
    }
    const updates = (props) => {
        props.liftState(true)
    }


/**
* @summary Send details to server
*/
    const sendDetailsToServer= (props)=>{
        var self=this;
        console.log(props)
        if (state.email.length && state.password.length) {
            //props.showError(null);
            const payload = {
                "username": state.email,
                "password": state.password, 
            }
            console.log(payload)
            axios.post('http://localhost:3000/login_user', payload)
                .then(function(response) {
                    if (response.status === 200) {
                        if(response.statusText ==='OK'){
                            console.log('successMessage Registration successful. Redirecting to home page..')
                            localStorage.setItem('connected', true);
                            localStorage.setItem('username', state.email);
                            ToastsStore.success("Hey! Welcome back sir")
                         
                        }

                    } else {
                        console.log("Some error ocurred");
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        } else {
            console.log('Please enter valid username and password')
        }

    }
    const classes = useStyles();

    return (
        <div>
            <ToastsContainer store={ToastsStore} />
        <div class="card mt-5 border-5 pt-2 active pb-0 px-3">
         
        <div className = { classes.paper } >
        <Avatar className = { classes.avatar } >
        <BathtubOutlinedIcon / >
        </Avatar> 
        
        <Typography component = "h1"variant = "h5" >
        Sign up
         </Typography> 
         <div className = "hv-center" >
        <form >
        <div className = "form-group text-left" >
        <label htmlFor = "exampleInputEmail1" > Email address </label> 
        <TextField type = "email"
        className = "form-control"
        id = "email"
        placeholder = "Enter email"
        value = { state.email }
        onChange = { handleChange }
        /> 
        <small id = "emailHelp"
        className = "form-text text-muted" > We 'll never share your email with anyone else.</small>
         </div > 
         <div className = "form-group text-left" >
        <label htmlFor = "exampleInputPassword1" > Password </label> 
        <input type = "password"
        className = "form-control"
        id = "password"
        placeholder = "Password"
        value = { state.password }
        onChange = { handleChange }
        /> 
        </div >

        <Button type = "submit"
        variant = "contained"
        color = "primary"
        fullWidth

        className = { classes.submit }
        onClick = { handleSubmitClick } >
        Login </Button> </form > 
        </div> 
    </div >
   
    </div>
     
    </div>
    
    )

}

export default RegistrationForm