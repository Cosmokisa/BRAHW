import newdelhi from "./assets/newdelhi.svg";

function NewDelhi() {
  return (
    <div className="newdelhi card">
      <h2>New-Delhi</h2>
      <div className="info">
        <p>17°C</p>
        <img className="img" src={newdelhi} alt="New-Delhi card" />
      </div>
    </div>
  );
}

export default NewDelhi;
