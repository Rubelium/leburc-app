import AppLatestMixCard from "./AppLatestMixCard";
import AppAccordion from "./AppAccordion"
import AppPlaylists from "./AppPlaylists";
import AppEventsList from "./AppEventsList";
import AppMyTracksCard from "./AppMyTracksCard";
import { Button } from "@nextui-org/button";

function AppBody() {
  return (
    <div className="font-kanit">
      <div className="bg-[#0f0f0f] text-white">
        <h1 className="text-3xl xs:text-4xl">DJ <span className="font-thin">&</span> Producer</h1>
        <h2 className="font-thin">Based in St. Petersburg, FL, USA</h2>
      </div>
      <div className="flex-col pt-16 bg-[#0f0f0f] text-white">
        <AppEventsList />
      </div>
      <div className="flex items-center justify-center min-h-[20vh] bg-gradient-to-b from-[#0f0f0f] to-[#1b1b1b] text-black">
        <Button
          radius="full"
          size="lg"
          color="success"
          variant="shadow"
          className="h-12 w-56 hover:bg-opacity-80"
          onPress={() => window.open("https://soundcloud.com/leburc", "_blank")}
        >
          LISTEN NOW
        </Button>
      </div>
      <div className="flex items-center justify-center min-h-[25vh] bg-gradient-to-b from-[#1b1b1b] to-[#202020] text-white text-2xl">
        <AppLatestMixCard />
      </div>
      <div className="flex items-center justify-center min-h-[25vh] bg-gradient-to-b bg-[#202020] text-white text-2xl">
        <AppMyTracksCard />
      </div>
      <div className="flex items-center justify-center min-h-[25vh] flex-col md:flex-row bg-[#202020]">
        <AppPlaylists />
      </div>
      <div className="flex items-center justify-center min-h-[25vh] flex-col bg-gradient-to-b from-[#202020] to-[#0f0f0f]">
        <div className="w-[280px] sm:w-80 z-10">
          <AppAccordion />
        </div>
      </div>
    </div>
  );
}

export default AppBody;