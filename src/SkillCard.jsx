export default function SkillCard({ skill }) {
  return (
    <div>
      <h5>{skill.skill}</h5>
      <div>{`${skill.rating} de 10`}</div>
    </div>
  );
}
