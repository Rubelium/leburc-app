import boomerangsDownUnderBar from "../images/boomerangsDownUnderBar.jpg"
import club201 from "../images/club201.jpeg"
import odysseyBeach from "../images/odysseyBeach.png"
import stPeteBrewingCompany from "../images/stPeteBrewingCompany.jpg"
import AppLatestMixCard from "./AppLatestMixCard";
import MixCard from "./AppMixCard";
import { Button } from "@nextui-org/button";
import { ClapSpinner } from "react-spinners-kit";
import { Link } from "@nextui-org/react";

function AppBody() {
  return (
    <div className="font-kanit">
      <div className="pt-8 bg-[#0f0f0f] text-white">
        <p>DJ / Aspiring Producer / Web Developer</p>
        <p className="font-thin">Based in Tampa, FL, USA</p>
      </div>
      <div className="flex-col pt-16  bg-[#0f0f0f] text-white">
        <p>Upcoming Events</p>
        <p className="font-thin">7 SEP 2023 - <Link href="https://www.saigonblonde.com/">Saigon Blonde</Link> - St. Petersburg, FL</p>
      </div>
      <div className="App-body-section bg-gradient-to-b from-[#0f0f0f] to-[#1b1b1b] text-black">
        <Button radius="full" size="lg" color="success" variant="shadow" className="h-10 w-56" onPress={() => window.location.href = "https://soundcloud.com/leburc"}>
          LISTEN NOW
        </Button>
      </div>
      <div className="App-body-section bg-gradient-to-b from-[#1b1b1b] to-[#272727] text-white text-2xl">
        <AppLatestMixCard />
      </div>
      <div className="App-body-section flex-col md:flex-row bg-[#272727]">
        <div>
          <MixCard
            headerText={"MIX PLAYLIST 001"}
            subHeaderText={"Minimal / Deep Tech Series"}
            url={"https://soundcloud.com/leburc/sets/minimal-deep-tech-mixes"}
            image={club201}
            imageCreditText="@sookie_takes_photos"
            imageCreditUrl="https://instagram.com/sookie_takes_photos?igshid=MzRlODBiNWFlZA=="
          />
          <div className="pt-1">
            <MixCard
              headerText={"MIX PLAYLIST 002"}
              subHeaderText={"Melodic House / Techno Series"}
              url={"https://soundcloud.com/leburc/sets/melodic-house-techno-mixes"}
              image={odysseyBeach}
              imageCreditText="@sandorimusic"
              imageCreditUrl="https://www.instagram.com/sandorimusic/"
            />
          </div>
        </div>
        <div>
          <MixCard
            headerText={"MIX PLAYLIST 003"}
            subHeaderText={"Afro House / Organic House Series"}
            url={"https://soundcloud.com/leburc/sets/afro-house-organic-house"}
            image={boomerangsDownUnderBar}
            imageCreditText="@omf20xx"
            imageCreditUrl="https://www.instagram.com/omf20xx/"
          />
          <div className="pt-1">
            <MixCard
              headerText={"MIX PLAYLIST 004"}
              subHeaderText={"Miscellaneous Series"}
              url={"https://soundcloud.com/leburc/sets/other-mixes"}
              image={stPeteBrewingCompany}
              imageCreditText="@f2t4"
              imageCreditUrl="https://www.instagram.com/f2t4/"
            />
          </div>
        </div>
      </div>
      <div className="App-body-section bg-gradient-to-b from-[#272727] to-[#1b1b1b]">
      </div>
      <div className="App-body-section flex-col bg-gradient-to-b from-[#1b1b1b] to-[#0f0f0f] text-white">
        <ClapSpinner size={30} color="#00ff89" loading={true} />
      </div>
    </div>
  );
}

export default AppBody;