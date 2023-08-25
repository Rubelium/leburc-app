import boomerangsDownUnderBar from "../images/boomerangsDownUnderBar.jpg"
import club201 from "../images/club201.jpeg"
import odysseyBeach from "../images/odysseyBeach.png"
import stPeteBrewingCompany from "../images/stPeteBrewingCompany.jpg"
import { ClapSpinner } from "react-spinners-kit";
import Card from "./Card";

export default function AppBody() {
  return (
    <>
      <div className="h-72 bg-gradient-to-b from-[#0f0f0f] to-[#1b1b1b]"></div>
      <div className="h-72 bg-gradient-to-b from-[#1b1b1b] to-[#272727]"></div>
      <div className="App-body-section flex flex-col md:flex-row bg-[#272727]">
        <Card
          headerText={"MIX 006"}
          subHeaderText={"Minimal / Deep Tech Series"}
          url={"https://soundcloud.com/leburc/leburc-minimal-deep-tech-006"}
          image={club201}
          imageCreditText="@sookie_takes_photos"
          imageCreditUrl="https://instagram.com/sookie_takes_photos?igshid=MzRlODBiNWFlZA=="
        />
        <Card
          headerText={"MIX 006"}
          subHeaderText={"Melodic House / Techno Series"}
          url={"https://soundcloud.com/leburc/leburc-melodic-house-techno-006"}
          image={boomerangsDownUnderBar}
          imageCreditText="@sandorimusic"
          imageCreditUrl="https://www.instagram.com/sandorimusic/"
        />
        <Card
          headerText={"MIX 001"}
          subHeaderText={"Progressive Series"}
          url={"https://soundcloud.com/leburc/progressive-house-001"}
          image={odysseyBeach}
          imageCreditText="@omf20xx"
          imageCreditUrl="https://www.instagram.com/omf20xx/"
        />
        <Card
          headerText={"MIX 001"}
          subHeaderText={"UK Garage / Breaks Series"}
          url={"https://soundcloud.com/leburc/leburc-uk-garage-bassline-breakbeat-001"}
          image={stPeteBrewingCompany}
          imageCreditText="@f2t4"
          imageCreditUrl="https://www.instagram.com/f2t4/"
        />
      </div>
      <div className="h-72 bg-gradient-to-b from-[#272727] to-[#1b1b1b]"></div>
      <div className="App-body-section bg-[#1b1b1b]">
        <ClapSpinner size={30} color="#00ff89" loading={true} />
      </div>
      <div className="h-72 bg-[#1b1b1b]"></div>
    </>
  );
}
