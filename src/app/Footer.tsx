import headshot from "../images/headshot.png"
import { Avatar, Link } from "@nextui-org/react";
import { SocialIcon } from "react-social-icons";

export default function AppFooter() {
  return (
    <footer className="App-footer pt-10 pb-10">
      <div className="flex-row">
        <SocialIcon className="App-social-icon" url="https://soundcloud.com/leburc" bgColor="#00ff89" />
        <SocialIcon className="App-social-icon" url="https://www.instagram.com/leburc.music/" bgColor="#00ff89" />
        <SocialIcon className="App-social-icon" url="https://github.com/Rubelium/leburc-app" bgColor="#00ff89" />
        <SocialIcon className="App-social-icon" url="mailto:dj.leburc@gmail.com" bgColor="#00ff89" />
      </div>
      <div className="pt-10 pb-4">
        <div className="text-xs text-grey">
          Email: <Link href="mailto:dj.leburc@gmail.com">dj.leburc@gmail.com</Link>
        </div>
        <div className="text-xs text-grey">
          Instagram: <Link href="https://www.instagram.com/leburc.music/">@leburc.music</Link>
        </div>
      </div>
      <Avatar isBordered size="md" color="success" src={headshot} />
      <div className="text-xs text-grey pt-8">&copy; LEBURC 2023</div>
    </footer>
  );
}
