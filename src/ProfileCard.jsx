import styles from "./ProfileCard.module.css";

export default function ProfileCard({ userKora }) {
  return (
    <div className={styles.profileCardContainer}>
      <div className={styles.profileCardContent}>
        <div>
          <img
            className={styles.profilePhoto}
            src={`./images/${userKora.photo}`}
            alt={`Foto de ${userKora.name}`}
          />
        </div>
        <div>
          <h3 className={styles.profileName}>{userKora.name}</h3>
          <p>{userKora.biography}</p>
        </div>
      </div>
    </div>
  );
}
