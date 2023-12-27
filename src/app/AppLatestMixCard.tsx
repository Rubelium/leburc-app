import SoundCloudPlayerEmbed from "../embeds/SoundCloudPlayerEmbed";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

function AppLatestMixCard() {
  return (
    <Card
      className="py-2 m-9 mt-0 border-2 max-w-[688px] border-[#fa5300] rounded-xl bg-[#ffffff] text-black shadow-xl shadow-orange-500"
      fullWidth
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-xl uppercase font-bold">
          LATEST MIX
        </p>
      </CardHeader>
      <CardBody className="overflow-visible py-2 px-5 items-center">
        <SoundCloudPlayerEmbed />
      </CardBody>
    </Card>
  );
}

export default AppLatestMixCard;