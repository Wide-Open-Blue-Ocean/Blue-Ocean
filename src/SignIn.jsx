import React, { useEffect, useState }from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import axios from 'axios';
import ChatEngineComponent from './ChatEngine';

// const config = {

// };
// firebase.initializeApp(config);

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDCFYRW6rFX51Y1tvAZNlyfsk6GId7OXuM",
  authDomain: "my-blue-ocean.firebaseapp.com",
  projectId: "my-blue-ocean",
  storageBucket: "my-blue-ocean.appspot.com",
  messagingSenderId: "926790538030",
  appId: "1:926790538030:web:61671ab94de4ef48fe20bf"
})

const uiConfig = {
  // Popup signin rather than redirect .
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  // callbacks: {
  //   // Avoid redirects after sign-in
  //   signInSuccessWithAuthResult: () => false,
  // },
  // display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

const SignIn = ({setLoggedIn}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userUID, setuserUID] = useState(null);
  const [userEmail, setuserEmail] = useState(null);
  // Listening to Firebase Auth state to set the local state.

  useEffect(() => {

    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      console.log('user data', user);
      setIsSignedIn(!!user);

      if (user) {
        setuserUID(user.uid);
        setuserEmail(user.email);
        setLoggedIn(user.email);

        var data = new FormData();
        data.append('username', user.email);
        data.append('secret', user.uid);

        // axios.get('/users', {
        //   params: {
        //     email: user.email
        //   }
        // }).then((result) => {
        //   if (result.data.length <= 0) {
        //      axios.post('/users', {

        //      })
        //   }
        // })


        var config = {
          method: 'post',
          url: 'https://api.chatengine.io/users/',
          headers: {
            'PRIVATE-KEY': '76c9fd93-3251-4538-a7eb-0ddf1f6d7e3c',
            // ...data.getHeaders()
          },
          data : data
        };

        axios(config).then(function (response) {
          window.location.reload();
        }).catch(function (error) {
          console.log(error);
        });
      }
    })


    // un-registers Firebase observer when component unmount
    return () => unregisterAuthObserver();

  }, []);

  if (!isSignedIn) {
    return (
      <div>

        <div id='login-page'>
        <div id="login-card">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      </div>
      </div>
    )
  }
   (userEmail && userUID) && <ChatEngineComponent username={userEmail} usersecret={userUID}/>

   return null;

   
  // return (
  //     // <div>
  //     // <h1>My App</h1>

  //     // <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
  //     // <a onClick={() => firebase.auth().signOut()}>Sign-out</a>

  //     // { (userEmail && userUID) && <ChatEngineComponent username={userEmail} usersecret={userUID}/> }
  //     // </div>

  // )

}

export default SignIn;