import { ClapSpinner } from "react-spinners-kit";
import AppCard from "./AppCard";
import boomerangsDownUnderBar from "../images/boomerangsDownUnderBar.jpg"
import club201 from "../images/club201.jpeg"
import odysseyBeach from "../images/odysseyBeach.png"

export default function AppBody() {
  return (
    <>
      <div className="h-72 bg-gradient-to-b from-[#0f0f0f] to-[#1b1b1b]"></div>
      <div className="App-body-section bg-[#1b1b1b]">
        <ClapSpinner size={30} color="#00ff89" loading={true} />
      </div>
      <div className="h-72 bg-gradient-to-b from-[#1b1b1b] to-[#272727]"></div>
      <div className="App-body-section flex flex-col md:flex-row bg-[#272727]">
        <AppCard headerText={"MIX 006"} subHeaderText={"Minimal / Deep Tech Series"} url={"https://soundcloud.com/leburc/leburc-minimal-deep-tech-006"} image={club201} />
        <AppCard headerText={"MIX 005"} subHeaderText={"Minimal / Deep Tech Series"} url={"https://soundcloud.com/leburc/leburc-minimal-deep-tech-005"} image={odysseyBeach} />
        <AppCard headerText={"MIX 006"} subHeaderText={"Melodic House / Techno Series"} url={"https://soundcloud.com/leburc/leburc-melodic-house-techno-006"} image={boomerangsDownUnderBar} />
      </div>
      <div className="h-72 bg-gradient-to-b from-[#272727] to-[#1b1b1b]"></div>
      <div className="App-body-section bg-[#1b1b1b]">
        <ClapSpinner size={30} color="#00ff89" loading={true} />
      </div>
      <div className="h-72 bg-[#1b1b1b]"></div>
    </>
  );
}
