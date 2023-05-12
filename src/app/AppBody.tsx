import { SocialIcon } from "react-social-icons";
import { Text } from "@nextui-org/react";

function AppBody() {
  return (
    <div className="App-body-column">
      <div className="App-body-row">
        <Text
          h6
          size={17}
          weight="semibold"
          css={{
            color: "#d4d4d4",
            textGradient: "45deg, $green600 -20%, $white 100%",
            marginBottom: "30px"
          }}
        >
          CONNECT&nbsp;
        </Text>
      </div>
      <div className="App-body-row">
        <SocialIcon className="App-social-icon" url="https://soundcloud.com/leburc" bgColor="#00ff89" />
        <SocialIcon className="App-social-icon" url="https://www.instagram.com/_leburc/" bgColor="#00ff89" />
        <SocialIcon className="App-social-icon" url="https://github.com/Rubelium/leburc-app" bgColor="#00ff89" />
        <SocialIcon className="App-social-icon" url="mailto:dj.leburc@gmail.com" bgColor="#00ff89" />
      </div>
    </div >
  );
}

export default AppBody;
