import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./Header.module.css";

export default function Header({ github, linkedin }) {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>Kora's Portfolio</h1>
      <div className={styles.socialIcons}>
        <a href={github}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={linkedin}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}
