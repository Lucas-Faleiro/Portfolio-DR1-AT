import "./App.css";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import SkillsSection from "./SkillsSection";
import Testimonial from "./Testimonial";
import skillsRating from "./assets/skillsRating.json";

function App() {
  const userKora = {
    name: "Lucas Faleiro",
    biography:
      "Aspirante de Tecnologia, estudante de Análise e Desenvolvimento de Sistemas no Instituto Infnet",
  };

  return (
    <div>
      <Header />
      <ProfileCard userKora={userKora} />
      <SkillsSection skillsRating={skillsRating} />
      <Testimonial />
    </div>
  );
}

export default App;
