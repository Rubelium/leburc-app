import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import club201 from "../images/club201.jpeg"

export default function App() {
  return (
    <Card
      className="py-4 m-8 border-4 border-[#00ff89] rounded-2xl bg-white text-black shadow-2xl"
      isPressable
      onPress={() => window.location.href = 'https://soundcloud.com/leburc/leburc-minimal-deep-tech-005'}
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-md uppercase font-bold">Mix 005</p>
        <p className="text-sm">Minimal / Deep Tech Series</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={club201}
          width={270} />
      </CardBody>
    </Card>
  );
}
