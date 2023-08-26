import boomerangsDownUnderBar from "../images/boomerangsDownUnderBar.jpg"
import club201 from "../images/club201.jpeg"
import odysseyBeach from "../images/odysseyBeach.png"
import stPeteBrewingCompany from "../images/stPeteBrewingCompany.jpg"
import Card from "./AppCard";
import { Button } from "@nextui-org/button";
import { ClapSpinner } from "react-spinners-kit";

function AppBody() {
  return (
    <div className="font-kanit">
      <div className="pt-8 bg-[#0f0f0f]"></div>
      <div className="App-body-section pt-5 bg-gradient-to-b from-[#0f0f0f] to-[#1b1b1b] text-black">
        <Button radius="full" size="lg" color="success" variant="shadow" className="h-10 w-48" onPress={() => window.location.href = "https://soundcloud.com/leburc"}>
          LISTEN NOW
        </Button>
      </div>
      <div className="App-body-section bg-gradient-to-b from-[#1b1b1b] to-[#272727] text-white text-2xl">
      </div>
      <div className="App-body-section flex flex-col md:flex-row bg-[#272727]">
        <div>
          <Card
            headerText={"MIX 006"}
            subHeaderText={"Minimal / Deep Tech Series"}
            url={"https://soundcloud.com/leburc/leburc-minimal-deep-tech-006"}
            image={club201}
            imageCreditText="@sookie_takes_photos"
            imageCreditUrl="https://instagram.com/sookie_takes_photos?igshid=MzRlODBiNWFlZA=="
          />
          <div className="pt-1">
            <Card
              headerText={"MIX 006"}
              subHeaderText={"Melodic House / Techno Series"}
              url={"https://soundcloud.com/leburc/leburc-melodic-house-techno-006"}
              image={boomerangsDownUnderBar}
              imageCreditText="@sandorimusic"
              imageCreditUrl="https://www.instagram.com/sandorimusic/"
            />
          </div>
        </div>
        <div>
          <Card
            headerText={"MIX 001"}
            subHeaderText={"Progressive Series"}
            url={"https://soundcloud.com/leburc/progressive-house-001"}
            image={odysseyBeach}
            imageCreditText="@omf20xx"
            imageCreditUrl="https://www.instagram.com/omf20xx/"
          />
          <div className="pt-1">
            <Card
              headerText={"MIX 001"}
              subHeaderText={"UK Garage / Breaks Series"}
              url={"https://soundcloud.com/leburc/leburc-uk-garage-bassline-breakbeat-001"}
              image={stPeteBrewingCompany}
              imageCreditText="@f2t4"
              imageCreditUrl="https://www.instagram.com/f2t4/"
            />
          </div>
        </div>
      </div>
      <div className="App-body-section bg-gradient-to-b from-[#272727] to-[#1b1b1b]"></div>
      <div className="App-body-section flex-col bg-gradient-to-b from-[#1b1b1b] to-[#0f0f0f] text-white">
        <p className="pb-5 italic">Website is under construction...</p>
        <ClapSpinner size={30} color="#00ff89" loading={true} />
      </div>
    </div>
  );
}

export default AppBody;