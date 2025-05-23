import newyork from "./assets/newyork.svg";

function NewYork() {
  return (
    <div className="newyork card">
      <h2>New-York</h2>
      <div className="info">
        <p>17°C</p>
        <img className="img" src={newyork} alt="New-York card" />
      </div>
    </div>
  );
}

export default NewYork;
