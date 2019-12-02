import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: "AIzaSyAZhYVFTXLNrcQBi7qK9Gr-ZbGNHfpAtwE",
  authDomain: "testfirebase-ca33c.firebaseapp.com",
})

export default function Test () {

  const [connect, setConnect] = useState(false)
  let uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
    signInSuccess: () => false
    }
  }

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user => {
      setConnect(!!user) 
      console.log(user)}
      )
  }, [])

  return (
    <Layout>
      <h1>Se connecter</h1>
      <h1>Press to connect</h1>
      {connect ?(
        <div>
          <p>Sign In</p>
          <button onClick={() => firebase.auth().signOut()}>Sign out</button>
          <h1>Hello {firebase.auth().currentUser.displayName}</h1>
          <img src={firebase.auth().currentUser.photoURL} alt=""/>
        </div>
        ) : (
        <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
        />
      )}
    </Layout>
  )
}