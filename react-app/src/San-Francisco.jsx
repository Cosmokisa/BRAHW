import sanfrancisco from "./assets/sanfrancisco.svg";

function SanFrancisco() {
  return (
    <div className="sanfrancisco card">
      <h2>San-Francisco</h2>
      <div className="info">
        <p>15°C</p>
        <img className="img" src={sanfrancisco} alt="San-Francisco card" />
      </div>
    </div>
  );
}

export default SanFrancisco;
