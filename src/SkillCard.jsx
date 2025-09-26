import styles from "./SkillCard.module.css";

export default function SkillCard({ skill }) {
  return (
    <div className={styles.skillCardItem}>
      <h5>{skill.skill}</h5>
      <div>
        <b className={styles.rating}>{skill.rating}</b> de 10
      </div>
    </div>
  );
}
