import paris from "./assets/paris.svg";

function Paris() {
  return (
    <div className="paris card">
      <h2>Paris</h2>
      <div className="info">
        <p>11°C</p>
        <img className="img" src={paris} alt="Paris card" />
      </div>
    </div>
  );
}

export default Paris;
