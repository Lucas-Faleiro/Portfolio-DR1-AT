import "./App.css";
import Header from "./Header";
import ProfileCard from "./ProfileCard";

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
    </div>
  );
}

export default App;
