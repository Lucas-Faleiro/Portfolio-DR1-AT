export default function ProfileCard({ userKora }) {
  return (
    <div>
      <h3>{userKora.name}</h3>
      <p>{userKora.biography}</p>
    </div>
  );
}
