import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeFramework = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

export const loginWithEmail = (email, password) => {
    return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
    
    console.log(res.user);
    const {email, photoURL, displayName } = res.user;
    console.log(email, photoURL, displayName);
        const newSignInUser = {
        isSignIn: true,
        email,
        photoURL,
        name: displayName,
        };
        // setUser(newSignInUser);
        // setLoggedInUser(newSignInUser);
        // history.replace(from);
        return newSignInUser;
    })
    .catch(error => {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode, errorMessage);
    })
}

// Google 
export const handleSignInWithGoogle = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
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

        return newSignInUser;
        
      });
  };

  // Create new Account
  export const createAccount = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      return res;
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage, errorCode);
      // ...
    });
  }

  
  // Facebook login
  export const handleSignInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res => {
      console.log(res.user);
      const { isSignIn, email, photoURL, displayName } = res.user;
      const newSignInUser = {
        isSignIn: true,
        email: email,
        photoURL,
        name: displayName,
      };
      return newSignInUser;
    })
  }