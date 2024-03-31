import React from 'react'
import styles from './Contact.module.css';

import { getImageUrl } from '../../utils';

const Contact = () => {
    return (
        <footer id ="contact" className={styles.container}>
            <div className={styles.text}><h2>Contact</h2>
                <p>Feel free to Reach Out !</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    < img src={getImageUrl("contact/emailIcon.png")} alt=" emailicon" />
                    <a href="mailto:chandelkaustubh781@gmail.com">chandelkaustubh781@gmail.com</a>
                </li>
                <li className={styles.link}>
                    < img src={getImageUrl("contact/ttr.png")} alt=" linkedinicon" />
                    <a href="hhtps://www.linkedin.com/myname">linkedin.com/myname</a>
                </li>
                <li className={styles.link}>
                    < img src={getImageUrl("contact/githubIcon.png")} alt=" giticon" />
                    <a href="hhtps://www.github.com/myname">githubicon/myname</a>
                </li>
            </ul>
        </footer>
    );
};
export default Contact