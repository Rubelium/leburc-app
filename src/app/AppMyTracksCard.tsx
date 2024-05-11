import SoundCloudPlayerEmbedMyTracks from "../embeds/SoundCloudPlayerEmbedMyTracks";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

function AppMyTracksCard() {
  return (
    <Card
      className="py-2 m-9 mt-0 border-2 max-w-[688px] border-[#9600fa] rounded-xl bg-[#ffffff] text-black shadow-lg shadow-[#9600fa] w-[298px] md:w-full"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-xl uppercase font-semibold">
          MY TRACKS
        </p>
      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center">
        <SoundCloudPlayerEmbedMyTracks />
      </CardBody>
    </Card>
  );
}

export default AppMyTracksCard;