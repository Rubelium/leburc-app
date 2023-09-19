import { Link } from "@nextui-org/react";
import { SocialIcon } from "react-social-icons";
import { BiMailSend, BiUser } from "react-icons/bi";


function AppFooter() {
  return (
    <footer className="App-footer flex flex-col items-center justify-center relative pt-10 pb-10 min-h-[30vh] text-white bg-[#0f0f0f]">
      <div className="flex-row">
        <SocialIcon
          className="App-social-icon mr-[10px] ml-[10px] h-[60px] w-[60px]"
          url="https://soundcloud.com/leburc"
          bgColor="#00ff89" />
        <SocialIcon
          className="App-social-icon mr-[10px] ml-[10px] h-[60px] w-[60px]"
          url="https://www.instagram.com/leburc.music/"
          bgColor="#00ff89" />
        <SocialIcon
          className="App-social-icon mr-[10px] ml-[10px] h-[60px] w-[60px]"
          url="https://github.com/Rubelium/leburc-app"
          bgColor="#00ff89" />
        <SocialIcon
          className="App-social-icon mr-[10px] ml-[10px] h-[60px] w-[60px]"
          url="mailto:dj.leburc@gmail.com"
          bgColor="#00ff89" />
      </div>
      <div className="flex pt-10 pb-4">
        <div>
          <div className="text-xs font-bold">
            DJ - Aspiring Producer - Developer
          </div>
          <div className="text-xs pt-3 font-medium">
            <Link
              className="pt-0.5 pb-0.5 hover:underline font-thin"
              href="mailto:dj.leburc@gmail.com">
              <BiMailSend size={20} className="mr-1 mt-0.5" /> dj.leburc@gmail.com
            </Link>
          </div>
          <div className="text-xs pt-2 font-medium">
            <Link
              className="pt-0.5 pb-0.5 hover:underline font-thin"
              href="https://www.instagram.com/leburc.music/">
              <BiUser size={20} className="mr-1" /> @leburc.music
            </Link>
          </div>
        </div>
      </div>
      <div className="text-xs text-grey pt-8">&copy; LEBURC 2023</div>
    </footer>
  );
}

export default AppFooter;