import SoundCloudPlayerEmbed from "../embeds/SoundCloudPlayerEmbed";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

function AppLatestMixCard() {
  return (
    <Card
      className="py-2 m-9 mt-0 border-2 max-w-[688px] border-[#9600fa] rounded-xl bg-[#ffffff] text-black shadow-lg shadow-[#9600fa] w-[298px] md:w-full"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-xl uppercase font-semibold">
          LATEST MIX
        </p>
      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center">
        <SoundCloudPlayerEmbed />
      </CardBody>
    </Card>
  );
}

export default AppLatestMixCard;