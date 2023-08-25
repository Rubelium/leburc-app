import { Card, CardHeader, CardBody, Image, Link } from "@nextui-org/react";

interface CardProps {
  headerText: string,
  subHeaderText: string;
  url: string;
  image: string;
  imageCreditText?: string;
  imageCreditUrl?: string;
}

const AppCard = ({ headerText, subHeaderText, url, image, imageCreditText, imageCreditUrl }: CardProps) => {
  return (
    <Card
      className={`py-4 m-8 ${imageCreditText && imageCreditUrl && "pb-0"} border-4 border-[#00ff89] rounded-2xl bg-[#ffffff] text-black shadow-2xl`}
      isPressable
      onPress={() => window.location.href = url}
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-xl uppercase font-bold">{headerText}
          <Link showAnchorIcon isDisabled></Link>
        </p>
        <p className="text-sm">{subHeaderText}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270} />
        {imageCreditText && imageCreditUrl &&
          <Link className="text-[9px] pt-1" href={imageCreditUrl}>{imageCreditText}</Link>
        }
      </CardBody>
    </Card>
  );
}

export default AppCard;
