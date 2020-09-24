// import React from "react";
// import {
//   Container,
//   FormControl,
//   Grid,
//   InputLabel,
//   Input,
//   FormHelperText,
//   Button,
//   TextField,
//   makeStyles,
// } from "@material-ui/core";

// const useStyle = makeStyles((theme) => ({
//   root: {
//     backgroundColor: "#fcfcfc",
//     color: "#888",
//     padding: "2rem",
//     marginTop: "5rem",
//     border: '1px solid #888',
//     borderRadius: '9px',
//     background: '373943',
//     boxShadow:'6px 6px 12px #2f3039, -6px -6px 12px #3f424d'
//     },
  
//   margin: {
//     margin: theme.spacing(1),
//   },

//   padding: {
//     padding: theme.spacing(1)
//   }
// }));

// const SignIn = () => {
//   const classes = useStyle();
//   return (
//     <Container >
//       <Grid container justify="center" >
//         <Grid item xs={6} className={classes.root}>
//           <h2 className={classes.margin}>Login</h2>
//           <form noValidate autoComplete="off">
//             <TextField
//               id="outlined-basic"
//               label="Email"
//               variant="outlined"
//               type="email"
//               fullWidth
//               required
//               className={classes.margin}
//             />

//             <TextField
//               id="outlined-basic"
//               label="Password"
//               variant="outlined"
//               type="password"
//               fullWidth
//               required
//               className={classes.margin}
//             />
//             <Button type="submit" className={classes.margin} fullWidth color="primary" variant="contained">
//               login
//             </Button>
           
//             <div className= {`${classes.margin} other-signin-methods ${classes.padding}`}  > 
            
//                 <Button fullWidth variant="outlined" color="secondary" className={classes.margin}>Sign in with Google</Button>
//                 <Button fullWidth variant="outlined"  color="primary" className={classes.margin}>Sign in with Facebook</Button>
//             </div>
//           </form>

//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default SignIn;
