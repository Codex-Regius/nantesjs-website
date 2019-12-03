import React, {useEffect, useState, Fragment} from 'react'
import { Picture } from '../components/Picture'
import Layout from '../components/layout'
import { SocialLinks } from '../components/SocialLinks'
import styles from './page-connexion.module.css';
import iconConnexion from './iconConnexion.png'
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: "AIzaSyAZhYVFTXLNrcQBi7qK9Gr-ZbGNHfpAtwE",
  authDomain: "testfirebase-ca33c.firebaseapp.com",
})

export default function PageConnexion () {

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
      <div className={styles.allPage}>
       {connect ?(
        <div>
          <h1>Hello {firebase.auth().currentUser.displayName}</h1>
          <img src={firebase.auth().currentUser.photoURL} alt=""/>
          <button onClick={() => firebase.auth().signOut()}>Sign out</button>
        </div>
        ) : (
          <Fragment>
            <h1 className={styles.title}>Connexion</h1>
            <h3 className={styles.title2}>Connectez-vous pour participer au tirage au sort à chaque Meetup !</h3>
            <div className={styles.iconAndSignIn}>
              <img 
              src= {iconConnexion}
              alt='icon for illustrate a connexion'
              className={styles.picture}
              />
              <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
              />
            </div>
          </Fragment>
      )}
      </div>
    </Layout>
  )
}