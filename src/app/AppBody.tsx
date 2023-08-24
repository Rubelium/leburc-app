import { StageSpinner } from "react-spinners-kit";
import AppCard from "./AppCard";

export default function AppBody() {
  return (
    <>
      <div className="App-body-section bg-[#1b1b1b]">
        <div>
          <StageSpinner size={30} color="#00ff89" loading={true} />
        </div>
      </div>
      <div className="App-body-section bg-[#272727]">
        <AppCard />
      </div>
      <div className="App-body-section bg-[#1b1b1b]">
        <div>
          <StageSpinner size={30} color="#00ff89" loading={true} />
        </div>
      </div>
    </>
  );
}
