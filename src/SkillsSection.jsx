import SkillCard from "./SkillCard";
import styles from "./SkillsSection.module.css";

export default function SkillsSection({ skillsRating }) {
  return (
    <div className={styles.skillsSectionContainer}>
      <h4>Auto Avaliação</h4>
      <div className={styles.skillsCardsContainer}>
        {skillsRating.map((skill) => {
          return <SkillCard key={skill.id} skill={skill} />;
        })}
      </div>
    </div>
  );
}
