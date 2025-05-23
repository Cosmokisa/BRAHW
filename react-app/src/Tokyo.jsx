import tokyo from "./assets/tokyo.svg";

function Tokyo() {
  return (
    <div className="tokyo card">
      <h2>Tokyo</h2>
      <div className="info">
        <p>8°C</p>
        <img className="img" src={tokyo} alt="Tokyo card" />
      </div>
    </div>
  );
}

export default Tokyo;
