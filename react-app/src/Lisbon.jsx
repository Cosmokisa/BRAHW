import lisbon from "./assets/lisbon.svg";

function Lisbon() {
  return (
    <div className="lisbon card">
      <h2>Lisbon</h2>
      <div className="info">
        <p>21°C</p>
        <img className="img" src={lisbon} alt="Lisbon card" />
      </div>
    </div>
  );
}

export default Lisbon;
