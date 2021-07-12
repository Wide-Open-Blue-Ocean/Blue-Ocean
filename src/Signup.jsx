import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const config = {
  apiKey: "AIzaSyDCFYRW6rFX51Y1tvAZNlyfsk6GId7OXuM",
  authDomain: "my-blue-ocean.firebaseapp.com",
  projectId: "my-blue-ocean",
  storageBucket: "my-blue-ocean.appspot.com",
  messagingSenderId: "926790538030",
  appId: "1:926790538030:web:61671ab94de4ef48fe20bf"
};
firebase.initializeApp(config);



const uiConfig = {
  // Popup signin rather than redirect .
  signInFlow: 'popup',
  // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

const Signup = () => {
  return (
      <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>

  )
}

export default Signup;