import SkillCard from "./SkillCard";

export default function SkillsSection({ skillsRating }) {
  return (
    <div>
      <h4>Auto Avaliação</h4>
      {skillsRating.map((skill) => {
        return <SkillCard key={skill.id} skill={skill} />;
      })}
    </div>
  );
}
