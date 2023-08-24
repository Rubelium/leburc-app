import { ClapSpinner, StageSpinner } from "react-spinners-kit";
import AppCard from "./AppCard";

function AppBody() {
  return (
    <>
      <div className="App-body-section bg-[#1b1b1b]">
        <div className="App-body-section-content">
          <StageSpinner size={30} color="#00ff89" loading={true} />
        </div>
      </div>
      <div className="App-body-section bg-[#272727]">
        <div className="App-body-section-content flex-row">
          <AppCard />
        </div>
      </div>
      <div className="App-body-section bg-[#1b1b1b]">
        <div className="App-body-section-content">
          <ClapSpinner size={30} color="#00ff89" loading={true} />
        </div>
      </div>
    </>
  );
}

export default AppBody;
