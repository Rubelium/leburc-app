import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { FunctionComponent } from "react";

interface AppCardProps {
  headerText: string,
  subHeaderText: string;
  url: string;
  image: string;
}

const AppCard: FunctionComponent<AppCardProps> = ({ headerText, subHeaderText, url, image }) => {
  return (
    <Card
      className="py-4 m-8 border-4 border-[#00ff89] rounded-2xl bg-white text-black shadow-2xl"
      isPressable
      onPress={() => window.location.href = url}
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-xl uppercase font-bold">{headerText}</p>
        <p className="text-sm">{subHeaderText}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270} />
      </CardBody>
    </Card>
  );
}

export default AppCard;
