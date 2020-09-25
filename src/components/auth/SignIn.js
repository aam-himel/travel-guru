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
  FormHelperText,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { UserContext } from "../../App";
import { useFormik } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import { handleSignInWithFacebook, handleSignInWithGoogle, initializeFramework, loginWithEmail } from "./LoginManager";
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

// Formik data

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {};

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

initializeFramework();
//  Sign in ------------------------------------------------------------------------------------

const SignIn = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  console.log("from", from);
  const classes = useStyles();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log("Logged in user", loggedInUser);
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
  const handleEmailSignIn = (e) => {
    console.log(e);
    e.preventDefault();
    if (formik.values.email && formik.values.password) {
      const { email, password } = formik.values;
      loginWithEmail(email, password)
      .then(res => {
        setLoggedInUser(res);
        history.replace(from);
      })
    }
  };

  // Handle Google SignIn method
  const handleGoogleSignIn = () => {
    handleSignInWithGoogle()
    .then(res => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    })
  }

  // // TEst create Account
  //  Handle Facebook Sign in method
  
  const handleFacebookSignIn = () => {
    handleSignInWithFacebook()
    .then(res => {
      setLoggedInUser(res);
      history.replace(from);
    })
  }

  // //  Handle Facebook Sign in method
  // const handleFacebookSignIn = () => {
  //   const provider = new firebase.auth.FacebookAuthProvider();
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then((res) => {
  //       console.log(res.user);
  //     });
  // };

  return (
    <Container maxWidth="xs">
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

          {formik.touched.email && formik.errors.email ? (
            <FormHelperText error>{formik.errors.email}</FormHelperText>
          ) : null}
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
          {formik.touched.password && formik.errors.password ? (
            <FormHelperText error>{formik.errors.password}</FormHelperText>
          ) : null}
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

          {/* <Button fullWidth
            variant="contained"
            color="primary">
            create account
          </Button> */}
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
