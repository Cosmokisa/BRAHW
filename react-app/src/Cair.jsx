import cair from "./assets/cair.svg";

function Cair() {
  return (
    <div className="cair card">
      <h2>Cair</h2>
      <div className="info">
        <p>21°C</p>
        <img className="img" src={cair} alt="Cair card" />
      </div>
    </div>
  );
}

export default Cair;
