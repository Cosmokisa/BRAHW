import wrappericon from "./assets/wrappericon.svg";

import Lisbon from "./Lisbon";
import Paris from "./Paris";
import Belgrade from "./Belgrade";
import Venice from "./Venice";
import TelAvive from "./Tel-Avive";
import Cair from "./Cair";
import NewYork from "./New-York";
import NewDelhi from "./New-Delhi";
import SanFrancisco from "./San-Francisco.jsx";
import Tokyo from "./Tokyo.jsx";
import Sydney from "./Sydney.jsx";

function Wrapper() {
  return (
    <div className="wrapper">
      <div className="wrapper-header">
        <h2>CSS Weather Forecast </h2>
        <img className="wrapper-header_img" src={wrappericon} alt="Sun" />
      </div>
      <div className="wrapper-components">
        <Lisbon />
        <Paris />
        <Belgrade />
        <Venice />
        <TelAvive />
        <Cair />
        <NewYork />
        <NewDelhi />
        <SanFrancisco />
        <Tokyo />
        <Sydney />
      </div>
      <p>
        Have a nice day and don't forget umbrella if you are in New Delhi now!
      </p>
    </div>
  );
}

export default Wrapper;
