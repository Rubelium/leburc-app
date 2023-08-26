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
      className="py-2 m-8 border-4 border-[#00ff89] rounded-2xl bg-[#ffffff] text-black shadow-2xl"
      style={{ background: "radial-gradient(at 50% 40%, rgb(255, 255, 255), transparent 80%) repeat scroll 0% 0%, radial-gradient(at 50% -47%, rgb(172, 224, 249), transparent 80%) repeat scroll 0% 0%, radial-gradient(at 0% 0%, rgb(232, 225, 255) 0px, transparent 32%) repeat scroll 0% 0%, radial-gradient(at 100% 98%, #EEF1FF, transparent) repeat scroll 0% 0%, rgba(0, 0, 0, 0) radial-gradient(at 0px 97%, rgb(227, 235, 255), white) repeat scroll 0% 0%" }}
      onPress={() => window.location.href = url}
      isPressable
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