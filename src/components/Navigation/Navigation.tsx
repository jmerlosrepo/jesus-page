import { Link } from "react-router-dom";
import RoundProfilePic from "../RoundProfilePic/RoundProfilePic";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <RoundProfilePic altName="Jesus Merlos Galvan" />
        </li>
        <li className={`${styles.navListItem} ${styles.userCompleteName}`}>
          Jesus Rene Merlos Galvan
        </li>
        <li className={`${styles.navListItem} ${styles.userTitle}`}>
          Software Engineer
        </li>
        <li className={`${styles.navListItem} ${styles.topSpacing}`}>
          <a className={styles.contactInfo} href="mailto:jmerlosg@hotmail.com">
            jmerlosg@hotmail.com
          </a>
        </li>
        <li className={styles.navListItem}>
          <a className={styles.contactInfo} href="tel::+1206406747">
            206-406-67-47
          </a>
        </li>
        <li>
          <ul
            className={`${styles.navList} ${styles.topSpacing} ${styles.contactInfo}`}
          >
            <li>
              <Link className={styles.navListLink} to="/aboutMe">
                Acerca de mi
              </Link>
            </li>
            <li>
              <Link className={styles.navListLink} to="/career">
                Carrera Profesional
              </Link>
            </li>
            <li>
              <Link className={styles.navListLink} to="/portfolio">
                Portafolio
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
