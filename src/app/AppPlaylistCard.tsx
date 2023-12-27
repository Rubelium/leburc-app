import { Card, CardHeader, CardBody, Image, Link } from "@nextui-org/react";

interface AppMixCardProps {
  headerText: string,
  subHeaderText: string;
  url: string;
  image: string;
  imageCreditText?: string;
  imageCreditUrl?: string;
}

const AppPlaylistCard = ({ headerText, subHeaderText, url, image, imageCreditText, imageCreditUrl }: AppMixCardProps) => {
  return (
    <Card
      className="py-2 m-8 border-2 border-[#00ff89] rounded-2xl bg-[#ffffff] text-black shadow-xl shadow-green-500"
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
          width={270}
          height={180}
        />
        {imageCreditText && imageCreditUrl &&
          <Link
            className="text-[9px] pt-1"
            href={imageCreditUrl}
          >
            Photo by: {imageCreditText}
          </Link>
        }
      </CardBody>
    </Card>
  );
}

export default AppPlaylistCard;