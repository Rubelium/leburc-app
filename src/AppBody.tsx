import { SocialIcon } from "react-social-icons";

function AppBody() {
  return (
    <div className="App-body">
      <SocialIcon className="App-social-icon" url="https://soundcloud.com/leburc" />
      <SocialIcon className="App-social-icon" url="https://www.instagram.com/_leburc/" bgColor="#fa2e4f" />
      <SocialIcon className="App-social-icon" url="https://github.com/Rubelium/leburc-app" bgColor="#ffffff" />
    </div>
  );
}

export default AppBody;
