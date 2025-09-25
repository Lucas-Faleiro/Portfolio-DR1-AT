import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }) {
  return (
    <div>
      <h4>Projetos</h4>
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
}
