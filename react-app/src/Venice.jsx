import venice from "./assets/venice.svg";

function Venice() {
  return (
    <div className="venice card">
      <h2>Venice</h2>
      <div className="info">
        <p>21°C</p>
        <img className="img" src={venice} alt="Venice card" />
      </div>
    </div>
  );
}

export default Venice;
