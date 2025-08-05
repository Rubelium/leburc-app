import NotificationIcon from "../icons/NotificationIcon";
import { Card, Chip } from "@nextui-org/react";

function AppAccordion() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[220px]">
      <Card className="bg-[#181818] border border-[#333] p-8 rounded-xl shadow-lg w-[298px] md:w-full max-w-md flex flex-col items-center">
        <Chip
          startContent={
            <div className="pl-2">
              <NotificationIcon size={18} />
            </div>
          }
          variant="shadow"
          color="warning"
          size="md"
          className="mb-6 px-1 py-2 text-base font-semibold rounded-full text-black"
        >
          Under Construction . . .
        </Chip>
        <div className="text-center">
          <div className="text-lg font-light text-white mb-2">
            Currently in the early stages of redefining the direction and vision of this project.
          </div>
          <div className="text-sm font-thin text-gray-300">
            For inquiries or collaborations, feel free to reach out via Instagram or email.<br />
            You can find all relevant links below.
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AppAccordion;