import { Link } from "@nextui-org/react";
import { SocialIcon } from "react-social-icons";

function AppFooter() {
  return (
    <footer className="App-footer flex flex-col items-center justify-center relative pt-10 pb-10 min-h-[30vh] text-white bg-[#0f0f0f]">
      <div className="flex-row">
        <SocialIcon
          className="App-social-icon mr-[10px] ml-[10px] h-[60px] w-[60px]"
          url="https://soundcloud.com/leburc"
          bgColor="#00ff89"
          aria-label="SoundCloud"
        />
        <SocialIcon
          className="App-social-icon mr-[10px] ml-[10px] h-[60px] w-[60px]"
          url="https://www.instagram.com/leburc.works/"
          bgColor="#00ff89"
          aria-label="Instagram"
        />
        <SocialIcon
          className="App-social-icon mr-[10px] ml-[10px] h-[60px] w-[60px]"
          url="https://github.com/Rubelium/leburc-app"
          bgColor="#00ff89"
          aria-label="GitHub"
        />
        <SocialIcon
          className="App-social-icon mr-[10px] ml-[10px] h-[60px] w-[60px]"
          url="mailto:dj.leburc@gmail.com"
          bgColor="#00ff89"
          aria-label="Email"
        />
      </div>
      <div className="flex pt-10 pb-4">
        <div>
          <div className="text-xs font-bold">
            DJ / Producer / Developer
          </div>
          <div className="text-xs pt-3 font-medium">
            <Link
              className="pt-0.5 pb-0.5 hover:underline font-thin"
              href="mailto:dj.leburc@gmail.com">
              dj.leburc@gmail.com
            </Link>
          </div>
          <div className="text-xs pt-2 font-medium">
            <Link
              className="pt-0.5 pb-0.5 hover:underline font-thin"
              href="https://www.instagram.com/leburc.works/">
              @leburc.works
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-6 text-xs">
        Homegrown and handcrafted.
      </div>
      <div className="mt-2 text-xs">
        © 2025 LEBURC™ • Last updated: 06/28/2025
      </div>
    </footer>
  );
}

export default AppFooter;