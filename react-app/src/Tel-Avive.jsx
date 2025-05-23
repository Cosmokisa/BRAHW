import telavive from "./assets/telavive.svg";

function TelAvive() {
  return (
    <div className="telavive card">
      <h2>Tel-Avive</h2>
      <div className="info">
        <p>32°C</p>
        <img className="img" src={telavive} alt="Tel-Avive card" />
      </div>
    </div>
  );
}

export default TelAvive;
