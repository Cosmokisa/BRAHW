import belgrade from "./assets/belgrade.svg";

function Belgrade() {
  return (
    <div className="belgrade card">
      <h2>Belgrade</h2>
      <div className="info">
        <p>15°C</p>
        <img className="img" src={belgrade} alt="Belgrade card" />
      </div>
    </div>
  );
}

export default Belgrade;
