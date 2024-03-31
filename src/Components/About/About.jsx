import React from 'react'
import styles from './About1.module.css';

import { getImageUrl } from '../../utils';
export const About = () => {
  return (
    <section  className= {styles.container} id="about">
      <h2 className= {styles.title}>About</h2>
      <div className= {styles.content}>
        <img src={getImageUrl("about/img.png")} alt="about" className= {styles.aboutimg} />
      </div>
      <ul className= {styles.aboutitems}>
        <li className= {styles.aboutitem}>
          <img src ={getImageUrl("about/cursorIcon.png")} alt="cursorIcon" />
          <div className= {styles.aboutitemtext}>
            <h3>Frontend Developer</h3>
            <p>I'm a Frontend Developer with experience in building responsive and optimized websites.</p>
          </div>
        </li>
        <li className= {styles.aboutitem}>
          <img src ={getImageUrl("about/serverIcon.png")} alt="serverIcon" />
          <div className= {styles.aboutitemtext}>
            <h3>Backend Developer</h3>
            <p>I have experience in developing fast and optimized back-end systems and Api's.</p>
          </div>
        </li>
        <li className= {styles.aboutitem}>
          <img src ={getImageUrl("about/uiIcon.png")} alt="UIIcon" />
          <div className= {styles.aboutitemtext}>
            <h3>UI Designer</h3>
            <p>I have designed multiple landing pages and have created design system as well .</p>
          </div>
        </li>
        <li className= {styles.aboutitem}>
          <img src ={getImageUrl("about/tp2.webp")} alt="UIIcon"  className= {styles.dsicon} />
          <div className= {styles.aboutitemtext}>
            <h3>Data-Analytics</h3>
            <p>I have experience in working with data-analytics tools such as Pandas and NumPy  Python libraries.</p>
          </div>
        </li>
      </ul>
    </section>
  );
};
