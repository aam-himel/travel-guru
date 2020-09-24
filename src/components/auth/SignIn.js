import React, { useState, useContext } from "react";

import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Container,
  FormHelperText
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useFormik } from "formik";
// Styles
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #888",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#F9A51A",
    "&:hover": {
      background: "#F9A318",
    },
    color: "black",
  },
  signInBtn: {
    background: "#fcfcfc",
    color: "#787878",
    margin: "5px 0",
    borderRadius: "9px",
  },
  signInSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

firebase.initializeApp(firebaseConfig);

// Formik data

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  
};

const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email is Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format!";
  }
  if (!values.password) {
    errors.password = "Password can not be Empty!";
  }
  return errors;
};
//  Sign in ------------------------------------------------------------------------------------

const SignIn = () => {

  const classes = useStyles();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // Formik form control
    //  Formik ----------------------------------------------
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const [user, setUser] = useState({
    isSignIn: false,
    email: "",
    photoURL: "",
    name: "",
  });

 
  //  Handle signin with email and password
  const handleEmailSignIn = () => {
    if(formik.values.email && formik.values.password){

      const {email, password} = formik.values;
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        // let errorCode = error.code;
        // let errorMessage = error.message;
        // console.log(errorCode, errorMessage);
      })
    }
    
  }

  console.log("formik touch",formik.touched)
  console.log("formik error",formik.errors)
  // Handle Google SignIn method
  const handleGoogleSignIn = (e) => {


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

  // TEst create Account
  const testAccount = () => {
    firebase.auth().createUserWithEmailAndPassword(formik.values.email, formik.values.password).
    catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage, errorCode);
      // ...
    });
  }

  //  Handle Facebook Sign in method
  const handleFacebookSignIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res.user);
      });
  };



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.email}
            
            onBlur={formik.handleBlur}
          />
          
          {
            formik.touched.email && formik.errors.email ? <FormHelperText error>{formik.errors.email}</FormHelperText>  : null
          }
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.password && formik.errors.password ? <FormHelperText error>{formik.errors.password}</FormHelperText>  : null
          }
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleEmailSignIn}
          >
            Login
          </Button>
          <Button onClick={testAccount} fullWidth
            variant="contained"
            color="primary">
            create account
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Typography>
                Don't have an account?
                <Link href="/signup" variant="body2">
                  <span className="text-orange">Sign Up</span>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>

      <div className={`${classes.signInSection} sign-in-section`}>
        <Button
          type="submit"
          variant="outlined"
          className={classes.signInBtn}
          onClick={handleGoogleSignIn}
        >
          Continue with Google
        </Button>

        <Button
          type="submit"
          variant="outlined"
          className={classes.signInBtn}
          onClick={handleFacebookSignIn}
        >
          Continue with Facebook
        </Button>
      </div>
    </Container>
  );
};

export default SignIn;
