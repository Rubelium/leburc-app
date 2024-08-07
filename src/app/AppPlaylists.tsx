import boomerangsDownUnderBar from "../images/boomerangsDownUnderBar.avif"
import club201 from "../images/club201.avif"
import odysseyBeach from "../images/odysseyBeach.avif"
import stPeteBrewingCompany from "../images/stPeteBrewingCompany.avif"
import saigonBlonde3 from "../images/saigonBlonde3.avif"
import saigonBlonde6 from "../images/saigonBlonde6.avif"
import AppPlaylistCard from "./AppPlaylistCard";

function AppPlaylists() {
  return (
    <>
      <div>
        <AppPlaylistCard
          headerText={"MIX PLAYLIST"}
          subHeaderText={"Minimal / Deep Tech"}
          url={"https://soundcloud.com/leburc/sets/minimal-deep-tech-mixes"}
          image={club201}
          imageCreditText="@sookie_takes_photos"
          imageCreditUrl="https://instagram.com/sookie_takes_photos"
        />
        <div className="pt-1">
          <AppPlaylistCard
            headerText={"MIX PLAYLIST"}
            subHeaderText={"Melodic House / Techno"}
            url={"https://soundcloud.com/leburc/sets/melodic-house-techno-mixes"}
            image={saigonBlonde6}
            imageCreditText="@sookie_takes_photos"
            imageCreditUrl="https://instagram.com/sookie_takes_photos"
          />
        </div>
      </div>
      <div>
        <AppPlaylistCard
          headerText={"MIX PLAYLIST"}
          subHeaderText={"Indie Dance"}
          url={"https://soundcloud.com/leburc/sets/mixes-indie-dance"}
          image={stPeteBrewingCompany}
          imageCreditText="@f2t4"
          imageCreditUrl="https://www.instagram.com/f2t4/"
        />
        <div className="pt-1">
          <AppPlaylistCard
            headerText={"MIX PLAYLIST"}
            subHeaderText={"Afro House / Organic House"}
            url={"https://soundcloud.com/leburc/sets/afro-house-organic-house"}
            image={odysseyBeach}
            imageCreditText="@omf20xx"
            imageCreditUrl="https://www.instagram.com/omf20xx/"
          />
        </div>
      </div>
      <div>
        <AppPlaylistCard
          headerText={"MIX PLAYLIST"}
          subHeaderText={"Deep House / Progressive House"}
          url={"https://soundcloud.com/leburc/sets/mixes-deep-house-progressive"}
          image={saigonBlonde3}
          imageCreditText="@sookie_takes_photos"
          imageCreditUrl="https://instagram.com/sookie_takes_photos"
        />
        <div className="pt-1">
          <AppPlaylistCard
            headerText={"MIX PLAYLIST"}
            subHeaderText={"Miscellaneous"}
            url={"https://soundcloud.com/leburc/sets/other-mixes"}
            image={boomerangsDownUnderBar}
            imageCreditText="@sandorimusic"
            imageCreditUrl="https://www.instagram.com/sandorimusic/"
          />
        </div>
      </div>
    </>
  );
}

export default AppPlaylists;