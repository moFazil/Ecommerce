import { Button, Grid, TextField } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../State/Auth/Action';

const LoginForm = () => {
const navigate = useNavigate();
const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password")
    }

    dispatch(login(userData))
    console.log("UserData",userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
             id="email"
             name="email"
             label="Email"
             fullWidth
             autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
             id="password"
             name="password"
             type="password"
             label="Password"
             fullWidth
             autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
            className=" bg-[#662D92] w-full"
            type="submit"
            variant="contained"
            size="large"
            sx={{padding:".8rem 0",backgroundColor:"#662D92"}}
            >
              LogIn
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className=" flex justify-center flex-col items-center">
        <div className=" py-3 flex items-center">
          <p>Already have an account ? </p>
          <Button onClick={()=>navigate("/register")} size="small" sx={{mt:"5px",ml:"5px"}}>Register</Button>
        </div>
      </div>
      </div>
      )
}

export default LoginForm;