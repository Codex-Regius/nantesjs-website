import React, { useState } from 'react';
import firebase from 'firebase';

import styles from './profil.module.css';
import QRCode from '../../static/images/QRCode.png';
import Fusee from '../../static/images/Fusee.png';
import Smiley from '../../static/images/Smiley.png';
import QrReader from 'react-qr-reader'

export default function Profil() {

  const [result, setResult] = useState('Nothing');

  let handleScan = data => {
    console.log(data)
    if (data) {
      setResult(data)
      }
    }

  let handleError = err => {
    console.error(err)
  }

  const [isHere, setIsHere] = useState(false);

  let handleClick = () => {
    setIsHere(!isHere)
  }

  let testSend=()=>{
    firebase.database().ref('/test_meetup').push({
      name:"meetup1",
      id:'1',
      data: 'data'
    })
    console.log('send')
  }

  return (
    <div className={styles.profilPage}>
      <div className={styles.ImageAndName}>
        <img src={firebase.auth().currentUser.photoURL} alt="" className={styles.profilImage}/>
        <h1>Bonjour {firebase.auth().currentUser.displayName}</h1>
      </div>
      <p>J'ai participé à N NantesJS au cours de l'année 2019</p>
      <div className={styles.badgesAndProfil}>
        <button className={styles.badgesButton} >Voir mes badges</button>
        <button className={styles.profilButton} >Mon Profil Public</button>
      </div>
      <div className={styles.QRCodeDiv}>
        <div className={isHere ? styles.QRCodeImgOff : styles.QRCodeImgOn}>
          <img src={QRCode} alt="QRCode" className={styles.QRCodeImage}/>
          <button className={styles.QRCodeButton} onClick={handleClick}>Scanner un QRCode</button>
        </div>
        {
          result === 'meetup' ? 
          <div>
            <h1>MEETUP</h1>
            <button className={styles.QRCodeButton2} onClick={handleClick}>Retour</button>
          </div>
          :
        <div className={isHere ? styles.cameraOn : styles.cameraOff}>
          <QrReader 
            delay={300}
            onError={handleError}
            onScan={handleScan}
          />
          <p>{result}</p>
          <button className={styles.QRCodeButton2} onClick={testSend}>test</button>
          <button className={styles.QRCodeButton2} onClick={handleClick}>Retour</button>
        </div>
        }
        <div className={styles.fusee}>
          <img src={Fusee} alt="Fusee" className={styles.fuseeImage}/>
          <button className={styles.badgesButton} >Voir mes badges</button>
        </div>
        <div className={styles.smiley}>
          <img src={Smiley} alt="Smiley" className={styles.smileyImage}/>
          <button className={styles.profilButton} >Mon profil public</button>
        </div>
      </div>
      <button className={styles.signOut} onClick={() => firebase.auth().signOut()}>Sign out</button>
    </div>
  )
}