import headshotColored from "../images/headshotColored.avif"
import NotificationIcon from "../icons/NotificationIcon";
import { ImpulseSpinner } from "react-spinners-kit";
import { Accordion, AccordionItem, Avatar, Badge, Chip } from "@nextui-org/react";

function AppAccordion() {
  return (
    <Accordion variant="shadow" showDivider={false}>
      <AccordionItem
        key="1"
        className="text-white items-center flex-col group"
        aria-label="Biography Accordion"
        title="Biography"
        subtitle={
          <p className="flex text-sm font-thin group-hover:text-[#f5a524]">
            Press to expand
          </p>
        }
        startContent={
          <Badge
            className="w-6 h-6 mt-4 z-10 mr-2"
            content={"i"}
            color="warning"
            variant="solid">
            <Avatar
              className="mt-3 mr-2 w-20 h-20"
              isBordered
              color="default"
              src={headshotColored} />
          </Badge>
        }
      >
        <div className="pb-4">
          <Chip
            startContent={<NotificationIcon size={18} />}
            variant="flat"
            color="success"
            size="sm"
          >
            <p className="pr-1">Under Construction . . .</p>
          </Chip>
          <p className="pt-5 text-sm font-thin">Currently working meticulously on my hopeful first release as a producer. Creating minimal deep tech compositions.</p>
        </div>
      </AccordionItem>
    </Accordion>
  );
}

export default AppAccordion;