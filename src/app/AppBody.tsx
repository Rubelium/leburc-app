import AppLatestMixCard from "./AppLatestMixCard";
import AppAccordion from "./AppAccordion"
import AppPlaylists from "./AppPlaylists";
import AppEventsList from "./AppEventsList";
import { Button } from "@nextui-org/button";

function AppBody() {
  return (
    <div className="font-kanit">
      <div className="pt-8 bg-[#0f0f0f] text-white">
        <h1 className="text-2xl min-[460px]:text-3xl">DJ / Aspiring Producer</h1>
        <h2 className="font-thin">Based in Tampa, FL, USA</h2>
      </div>
      <div className="flex-col pt-16 bg-[#0f0f0f] text-white">
        <AppEventsList />
      </div>
      <div className="flex items-center justify-center min-h-[25vh] bg-gradient-to-b from-[#0f0f0f] to-[#1b1b1b] text-black">
        <Button
          radius="full"
          size="lg"
          color="success"
          variant="shadow"
          className="h-10 w-56 hover:bg-opacity-80"
          onPress={() => window.location.href = "https://soundcloud.com/leburc"}
        >
          LISTEN NOW
        </Button>
      </div>
      <div className="flex items-center justify-center min-h-[25vh] bg-gradient-to-b from-[#1b1b1b] to-[#272727] text-white text-2xl">
        <AppLatestMixCard />
      </div>
      <div className="flex items-center justify-center min-h-[25vh] flex-col md:flex-row bg-[#272727]">
        <AppPlaylists />
      </div>
      <div className="flex items-center justify-center min-h-[30vh] flex-col bg-gradient-to-b from-[#272727] to-[#0f0f0f]">
        <div className="w-[280px] sm:w-80 pb-1 z-10">
          <AppAccordion />
        </div>
      </div>
    </div>
  );
}

export default AppBody;