import club201 from "../images/club201.avif"
import odysseyBeach from "../images/odysseyBeach.avif"
import stPeteBrewingCompany from "../images/stPeteBrewingCompany.avif"
import saigonBlonde6 from "../images/saigonBlonde6.avif"
import AppPlaylistCard from "./AppPlaylistCard";

function AppPlaylists() {
  return (
    <>
      <div>
        <AppPlaylistCard
          headerText={"MIX PLAYLIST"}
          subHeaderText={"Minimal / Deep Tech Series"}
          url={"https://soundcloud.com/leburc/sets/minimal-deep-tech-mixes"}
          image={club201}
          imageCreditText="@sookie_takes_photos"
          imageCreditUrl="https://instagram.com/sookie_takes_photos?igshid=MzRlODBiNWFlZA==" />
        <div className="pt-1">
          <AppPlaylistCard
            headerText={"MIX PLAYLIST"}
            subHeaderText={"Afro House / Organic House Series"}
            url={"https://soundcloud.com/leburc/sets/afro-house-organic-house"}
            image={saigonBlonde6}
            imageCreditText="@sookie_takes_photos"
            imageCreditUrl="https://instagram.com/sookie_takes_photos?igshid=MzRlODBiNWFlZA==" />
        </div>
      </div>
      <div>
        <AppPlaylistCard
          headerText={"MIX PLAYLIST"}
          subHeaderText={"Melodic House / Techno Series"}
          url={"https://soundcloud.com/leburc/sets/melodic-house-techno-mixes"}
          image={odysseyBeach}
          imageCreditText="@omf20xx"
          imageCreditUrl="https://www.instagram.com/sandorimusic/" />
        <div className="pt-1">
          <AppPlaylistCard
            headerText={"MIX PLAYLIST"}
            subHeaderText={"Miscellaneous Series"}
            url={"https://soundcloud.com/leburc/sets/other-mixes"}
            image={stPeteBrewingCompany}
            imageCreditText="@f2t4"
            imageCreditUrl="https://www.instagram.com/f2t4/" />
        </div>
      </div>
    </>
  );
}

export default AppPlaylists;