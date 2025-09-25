export default function ProjectCard({ project }) {
  return (
    <div>
      <h5>{project.title}</h5>
      <img
        src={`/images/${project.image}`}
        alt={project.title}
        width={"100px"}
      />
      <button>Acessar</button>
    </div>
  );
}
