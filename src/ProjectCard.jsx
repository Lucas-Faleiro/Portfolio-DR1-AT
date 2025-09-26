import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}>
      <h5 className={styles.projectTitle}>{project.title}</h5>
      <img
        className={styles.projectImg}
        src={`/images/${project.image}`}
        alt={project.title}
      />
      <a className={styles.projectUrl} href={project.url}>
        Acessar
      </a>
    </div>
  );
}
