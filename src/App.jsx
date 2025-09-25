import "./App.css";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import SkillsSection from "./SkillsSection";
import skillsRating from "./assets/skillsRating.json";

function App() {
  const userKora = {
    name: "Lucas Faleiro",
    biography:
      "Aspirante da Tecnologia, estudante de Análise e Desenvolvimento de Sistemas no Instituto Infnet",
  };

  return (
    <div>
      <Header />
      <ProfileCard userKora={userKora} />
      <SkillsSection skillsRating={skillsRating} />
    </div>
  );
}

export default App;
