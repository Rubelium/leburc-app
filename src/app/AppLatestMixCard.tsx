import { Card, CardHeader, CardBody } from "@nextui-org/react";
import SoundCloudPlayerEmbed from "../embeds/SoundCloudPlayerEmbed";

function AppLatestMixCard() {
  return (
    <Card
      className="py-2 m-8 border-2 max-w-[688px] border-[#00ff89] rounded-2xl bg-[#ffffff] text-black shadow-2xl"
      fullWidth
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-xl uppercase font-bold">
          LATEST MIX
        </p>
      </CardHeader>
      <CardBody className="overflow-visible py-2 px-0 items-center">
        {/* <SoundCloudPlayerEmbed /> */}
      </CardBody>
    </Card>
  );
}

export default AppLatestMixCard;