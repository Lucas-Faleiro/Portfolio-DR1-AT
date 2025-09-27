import ProjectCard from "./ProjectCard";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection({ projects }) {
  return (
    <div className={styles.projectsSection}>
      <h4 className={styles.projectsSectionTitle}>Projetos</h4>
      <div className={styles.projectsContainer}>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}
