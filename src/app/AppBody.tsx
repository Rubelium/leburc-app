import boomerangsDownUnderBar from "../images/boomerangsDownUnderBar.avif"
import club201 from "../images/club201.avif"
import odysseyBeach from "../images/odysseyBeach.avif"
import stPeteBrewingCompany from "../images/stPeteBrewingCompany.avif"
import NotificationIcon from "../icons/NotificationIcon";
import AppLatestMixCard from "./AppLatestMixCard";
import MixCard from "./AppMixCard";
import { Button } from "@nextui-org/button";
import { ClapSpinner } from "react-spinners-kit";
import { Chip, Link } from "@nextui-org/react";
import { useState } from "react";
import AppMediaPlayer from "./AppMediaPlayer";

function AppBody() {
  const [hideAlert, setHideAlert] = useState(false);

  return (
    <div className="font-kanit">
      <div className="pt-8 bg-[#0f0f0f] text-white">
        <h1 className="text-2xl">DJ / Aspiring Producer</h1>
        <h2 className="font-thin">Based in Tampa, FL, USA</h2>
      </div>
      <div className="flex-col pt-16  bg-[#0f0f0f] text-white">
        <p className="text-xl">Events</p>
        <p className="pt-1 font-thin line-through text-gray-400">16 MARCH 2023 - <Link isDisabled className="line-through" href="http://www.club-201.com/">Club 201</Link> - St. Petersburg, FL</p>
        <p className="pt-2 font-thin line-through text-gray-400">13 MAY 2023 - <Link isDisabled className="line-through" href="https://www.stpetebeach.org/Facilities/Facility/Details/Upham-Beach-27">Upham Beach</Link> - St. Petersburg, FL</p>
        <p className="pt-2 font-thin line-through text-gray-400">18 MAY 2023 - <Link isDisabled className="line-through" href="https://www.saigonblonde.com/">Saigon Blonde</Link> - St. Petersburg, FL</p>
        <p className="pt-2 font-thin line-through text-gray-400">27 JULY 2023 - <Link isDisabled className="line-through" href="http://www.club-201.com/">Club 201</Link> - St. Petersburg, FL</p>
        <p className="pt-2 font-thin line-through text-gray-400">7 SEP 2023 - <Link isDisabled className="line-through" href="https://www.saigonblonde.com/">Saigon Blonde</Link> - St. Petersburg, FL</p>
        <p className="pt-2 font-thin line-through text-gray-400">16 SEP 2023 - <Link isDisabled className="line-through" href="https://www.facebook.com/districtsaintpete/">District Lounge</Link> - St. Petersburg, FL</p>
        <p className="pt-2 font-thin">29 OCT 2023 - <Link showAnchorIcon className="font-extralight hover:underline" isDisabled href="">TBA</Link> - St. Petersburg, FL</p>
      </div>
      <div className="flex items-center justify-center min-h-[25vh] bg-gradient-to-b from-[#0f0f0f] to-[#1b1b1b] text-black">
        <Button radius="full" size="lg" color="success" variant="shadow" className="h-10 w-56 hover:text-white" onPress={() => window.location.href = "https://soundcloud.com/leburc"}>
          LISTEN NOW
        </Button>
      </div>
      <div className="flex items-center justify-center min-h-[25vh] bg-gradient-to-b from-[#1b1b1b] to-[#272727] text-white text-2xl">
        <AppLatestMixCard />
        {/* <AppMediaPlayer /> */}
      </div>
      <div className="flex items-center justify-center min-h-[25vh] flex-col md:flex-row bg-[#272727]">
        <div>
          <MixCard
            headerText={"MIX PLAYLIST 1"}
            subHeaderText={"Minimal / Deep Tech Series"}
            url={"https://soundcloud.com/leburc/sets/minimal-deep-tech-mixes"}
            image={club201}
            imageCreditText="@sookie_takes_photos"
            imageCreditUrl="https://instagram.com/sookie_takes_photos?igshid=MzRlODBiNWFlZA=="
          />
          <div className="pt-1">
            <MixCard
              headerText={"MIX PLAYLIST 2"}
              subHeaderText={"Melodic House / Techno Series"}
              url={"https://soundcloud.com/leburc/sets/melodic-house-techno-mixes"}
              image={odysseyBeach}
              imageCreditText="@omf20xx"
              imageCreditUrl="https://www.instagram.com/sandorimusic/"
            />
          </div>
        </div>
        <div>
          <MixCard
            headerText={"MIX PLAYLIST 3"}
            subHeaderText={"Afro House / Organic House Series"}
            url={"https://soundcloud.com/leburc/sets/afro-house-organic-house"}
            image={boomerangsDownUnderBar}
            imageCreditText="@sandorimusic"
            imageCreditUrl="https://www.instagram.com/omf20xx/"
          />
          <div className="pt-1">
            <MixCard
              headerText={"MIX PLAYLIST 4"}
              subHeaderText={"Miscellaneous Series"}
              url={"https://soundcloud.com/leburc/sets/other-mixes"}
              image={stPeteBrewingCompany}
              imageCreditText="@f2t4"
              imageCreditUrl="https://www.instagram.com/f2t4/"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-[25vh] flex-col bg-gradient-to-b from-[#272727] to-[#0f0f0f]">
        <ClapSpinner size={30} color="#00ff89" loading={true} />
        <div>
          <Chip
            className={`${hideAlert ? "hidden" : ""} mt-4`}
            startContent={<NotificationIcon size={18} />}
            variant="flat"
            color="success"
            size="sm"
            onClose={() => setHideAlert(true)}
          >
            Website Under Construction
          </Chip>
        </div>
      </div>
    </div>
  );
}

export default AppBody;