import React, {useContext, useState} from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import {FormHelperText} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {} from '@fortawesome/fontawesome-svg-core';
import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border:'1px solid #888',
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    padding:theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#F9A51A', 
    '&:hover': {
      background: '#F9A318',
    },
    color: 'black'
  },
  my: {
    margin: '1rem 0',
  },
  border: {
    border:'1px solid #888'
  },
  signInSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signInBtn : {
    background: '#fcfcfc',
    color:'#787878',
    margin: '5px 0',
    borderRadius: '9px'
  }
  
}));


// Signup using email and password
const initialValues = {
  firstName: '',
  lastName: '',
  email: "",
  password: "",
};

const onSubmit = (values) => {
  
};

const validate = (values) => {
  let errors = {};
  if(!values.firstName){
    errors.firstName = "Required"
  }
  if(!values.lastName){
    errors.lastName = "Required"
  }
  if (!values.email) {
    errors.email = "Email is Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format!";
  }
  if (!values.password) {
    errors.password = "Password can not be Empty!";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Password can not be Empty!";
  }else if(values.confirmPassword !== values.password){
    errors.confirmPassword = "Password Did't matched!";
  }
  return errors;
};


const SignUp = () => {


  const classes = useStyles();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({
    isSignIn: false,
    email: "",
    photoURL: "",
    displayName: "",
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

    // Handle Google SignIn method 
    const handleGoogleSignIn = (e) => {
      console.log(e);
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          const { isSignIn, email, photoURL, displayName } = res.user;
  
          const newSignInUser = {
            isSignIn: true,
            email: email,
            photoURL,
            name: displayName,
          };
          setUser(newSignInUser);
          setLoggedInUser(newSignInUser);
        });
    };

  //  Handle Facebook Sign in method
  const handleFacebookSignIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      console.log(res.user);
      const { isSignIn, email, photoURL, displayName } = res.user;
      const newSignInUser = {
        isSignIn: true,
        email: email,
        photoURL,
        name: displayName,
      };
      setUser(newSignInUser);
      setLoggedInUser(newSignInUser);
    })
  }

  console.log("signup formik touch",formik.touched)
  console.log("signup formik error",formik.errors)
  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                autoFocus
              />
            
            {
              formik.touched.firstName && formik.errors.firstName ? <FormHelperText error>{formik.errors.firstName}</FormHelperText>  : null
            }
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            {
              formik.touched.lastName && formik.errors.lastName ? <FormHelperText error>{formik.errors.lastName}</FormHelperText>  : null
            }
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Username or Email"
                name="email"
                autoComplete="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {
                formik.touched.email && formik.errors.email ? <FormHelperText error>{formik.errors.email}</FormHelperText>  : null
              }
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {
                formik.touched.password && formik.errors.password ? <FormHelperText error>{formik.errors.password}</FormHelperText>  : null
              }
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="confirm-password"
                id="confirmPassword"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {
                formik.touched.confirmPassword && formik.errors.confirmPassword ? <FormHelperText error>{formik.errors.confirmPassword}</FormHelperText>  : null
              }
            </Grid>

            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            color="primary"
            className= {classes.submit}
          >
            Create an Account
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Typography>
              Already have an account?  
              <Link href="/signin" variant="body2">
                <span className="text-orange">Sign in</span>
              </Link>
              </Typography>
             
            </Grid>
          </Grid>
        </form>
        
      </div>

      
      <div className={`${classes.signInSection} sign-in-section`}>

        <Button type="submit"  variant="outlined" className={classes.signInBtn} onClick={handleGoogleSignIn}>
             Continue with Google
        </Button>

        <Button type="submit"  variant="outlined" className={classes.signInBtn} onClick={handleFacebookSignIn}>
          Continue with Facebook
        </Button>
      </div>
    </Container>
  );
}


export default SignUp;