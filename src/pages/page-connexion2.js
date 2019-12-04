import React, { useState, useEffect } from 'react';
import Layout from '../components/layout'
import QrReader from 'react-qr-reader'
import styles from './profil.module.css';
import firebase from 'firebase';




export default function PageConnexion2() {

  const [result, setResult] = useState('No result');

  let handleScan = data => {
    if (data) {
      setResult(data)
    }
  }

  let handleError = err => {
    console.error(err)
  }

  return (
    <Layout>
      {/* <div className={styles.ImageAndName}>
        <img src={firebase.auth().currentUser.photoURL} alt="" className={styles.profilImage} />
        <h1>Bonjour {firebase.auth().currentUser.displayName}</h1>
      </div>
      <p>J'ai participé à N NantesJS au cours de l'année 2019</p>
      <div className={styles.badgesAndProfil}>
        <button className={styles.badgesButton} >Voir mes badges</button>
        <button className={styles.profilButton} >Mon Profil Public</button>
      </div> */}
      <div>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <p>{result}</p>
      </div>
    </Layout>
  )
}