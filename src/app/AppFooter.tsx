import { Link } from "@nextui-org/react";
import { SocialIcon } from "react-social-icons";

function AppFooter() {
  return (
    <footer className="App-footer flex flex-col items-center justify-center relative pt-10 pb-10 min-h-[30vh] text-white bg-[#0f0f0f]">
      <div className="flex-row">
        <SocialIcon className="App-social-icon mr-[10px] ml-[10px] h-[60px] w-[60px]" url="https://soundcloud.com/leburc" bgColor="#00ff89" />
        <SocialIcon className="App-social-icon mr-[10px] ml-[10px] h-[60px] w-[60px]" url="https://www.instagram.com/leburc.music/" bgColor="#00ff89" />
        <SocialIcon className="App-social-icon mr-[10px] ml-[10px] h-[60px] w-[60px]" url="https://github.com/Rubelium/leburc-app" bgColor="#00ff89" />
        <SocialIcon className="App-social-icon mr-[10px] ml-[10px] h-[60px] w-[60px]" url="mailto:dj.leburc@gmail.com" bgColor="#00ff89" />
      </div>
      <div className="flex pt-10 pb-4">
        {/* <Avatar className="mt-3" isBordered size="md" color="default" src={headshot} /> */}
        <div>
          <div className="text-xs font-bold">
            DJ / Aspiring Producer / Developer
          </div>
          <div className="text-xs pt-3">
            Email: <Link className="pt-1 pb-1 hover:underline" href="mailto:dj.leburc@gmail.com">dj.leburc@gmail.com</Link>
          </div>
          <div className="text-xs pt-2">
            Instagram: <Link className="pt-1 pb-1 hover:underline" href="https://www.instagram.com/leburc.music/">@leburc.music</Link>
          </div>
        </div>
      </div>
      <div className="text-xs text-grey pt-8">&copy; LEBURC 2023</div>
    </footer>
  );
}

export default AppFooter;