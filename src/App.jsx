import "./App.css";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import SkillsSection from "./SkillsSection";
import Testimonial from "./Testimonial";
import skillsRating from "./assets/skillsRating.json";
import projects from "./assets/projects.json";
import ProjectsSection from "./ProjectsSection";

function App() {
  const userKora = {
    name: "Lucas Faleiro",
    biography:
      "Aspirante de Tecnologia, estudante de Análise e Desenvolvimento de Sistemas no Instituto Infnet",
    github: "https://github.com/Lucas-Faleiro",
    linkedin: "https://www.linkedin.com/in/lucasfaleirosilva/",
  };

  return (
    <div>
      <Header github={userKora.github} linkedin={userKora.linkedin} />
      <ProfileCard userKora={userKora} />
      <SkillsSection skillsRating={skillsRating} />
      <Testimonial />
      <ProjectsSection projects={projects} />
    </div>
  );
}

export default App;
