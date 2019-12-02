import React from 'react'
import { Picture } from '../components/Picture'
import Layout from '../components/layout'
import { SocialLinks } from '../components/SocialLinks'
import styles from './page-connexion.module.css';
import iconConnexion from './iconConnexion.png'


export default function PageConnexion () {
  return (
    <Layout>
      <div>
        <h1 className={styles.title}>Connexion</h1>
        <h3 className={styles.title2}>Connectez-vous pour participer au tirage au sort à chaque Meetup !</h3>
        <div>
          <img 
          src= {iconConnexion}
          alt='icon for illustrate a connexion'
          className={styles.picture}
          />
        </div>
        <div className={styles.button}>
          <button>facbook</button>
          <button>twitter</button>
          <button>github</button>
          <button>Google</button>
        </div>
      </div>
      <SocialLinks/>
    </Layout>
  )
}