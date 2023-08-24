import { SocialIcon } from "react-social-icons";

export default function AppFooter() {
  return (
    <footer className="App-footer">
      <div className="flex-row">
        <SocialIcon className="App-social-icon" url="https://soundcloud.com/leburc" bgColor="#00ff89" />
        <SocialIcon className="App-social-icon" url="https://www.instagram.com/_leburc/" bgColor="#00ff89" />
        <SocialIcon className="App-social-icon" url="https://github.com/Rubelium/leburc-app" bgColor="#00ff89" />
        <SocialIcon className="App-social-icon" url="mailto:dj.leburc@gmail.com" bgColor="#00ff89" />
      </div>
      <div className="text-xs text-grey mt-8">&copy; LEBURC 2023</div>
    </footer>
  );
}
