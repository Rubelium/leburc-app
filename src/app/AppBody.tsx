import AppLatestMixCard from "./AppLatestMixCard";
import AppBiographyCard from "./AppBiographyCard"
import AppPlaylists from "./AppPlaylists";
import AppEventsList from "./AppEventsList";
import AppMyTracksCard from "./AppMyTracksCard";
import { Button } from "@nextui-org/react";

function AppBody() {
  return (
    <div className="font-kanit">
      <div className="bg-[#0f0f0f] text-white">
        <h1 className="text-3xl xs:text-4xl">DJ <span className="font-thin">&</span> Producer</h1>
        <h2 className="font-thin">Based in St. Petersburg, FL, USA</h2>
      </div>
      <div className="flex-col pt-10 bg-[#0f0f0f] text-white">
        <AppEventsList />
      </div>
      <div className="flex items-center justify-center min-h-[16vh] bg-gradient-to-b from-[#0f0f0f] to-[#131313] text-black">
        <Button
          radius="full"
          size="lg"
          color="success"
          variant="shadow"
          className="h-12 w-56 border border-gray-500 hover:bg-opacity-70 hover:shadow-gray-700"
          onPress={() => window.open("https://soundcloud.com/leburc", "_blank")}
        >
          LISTEN NOW
        </Button>
      </div>
      <div className="flex items-center justify-center min-h-[25vh] bg-gradient-to-b from-[#131313] to-[#131313] text-white text-2xl pt-1">
        <AppLatestMixCard />
      </div>
      <div className="flex items-center justify-center min-h-[25vh] bg-gradient-to-b bg-[#131313] text-white text-2xl">
        <AppMyTracksCard />
      </div>
      <div className="flex items-center justify-center min-h-[25vh] flex-col md:flex-row bg-[#131313]">
        <AppPlaylists />
      </div>
      <div className="flex items-center justify-center min-h-[50vh] flex-col bg-gradient-to-b from-[#131313] to-[#0f0f0f]">
        <AppBiographyCard />
      </div>
    </div>
  );
}

export default AppBody;