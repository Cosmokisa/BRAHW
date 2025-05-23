import sydney from "./assets/sydney.svg";

function Sydney() {
  return (
    <div className="sydney card">
      <h2>Sydney</h2>
      <div className="info">
        <p>25°C</p>
        <img className="img" src={sydney} alt="Sydney card" />
      </div>
    </div>
  );
}

export default Sydney;
