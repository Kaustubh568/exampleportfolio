import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl} from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className ={styles.title}>Hi,I am Kaustubh Chandel</h1>
            <p className={styles.description}>I'm a full-stack developer with minimum 2 years Of Experience in computer science</p>
            <a href="mailto:chandelkaustubh781@gmail.com" className={styles.contactbtn}>Contact Me</a>
        </div>
        <img src ={getImageUrl("hero/tt1.jpg")} alt="hero" className={styles.heroimg} />
        <div className= {styles.topblur} />
        <div className= {styles.bottomblur} />
    </section>
  )
}
