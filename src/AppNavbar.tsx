import logoLettering from "./leburcLogoLettering.png"
import { Navbar } from "@nextui-org/react";
import { SocialIcon } from "react-social-icons";
import { ScrollToTop } from "./Helpers";

function AppNavbar() {
  return (
    <Navbar variant={"floating"}>
      <Navbar.Brand>
        <div className="App-navbar-logo-wrapper" onClick={ScrollToTop}>
          <img src={logoLettering} className="App-leburc-logo-lettering-navbar" alt="Loading..." />
        </div>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <SocialIcon className="App-social-icon-navbar" url="https://soundcloud.com/leburc" bgColor="#ffffff" />
        </Navbar.Item>
        <Navbar.Item>
          <SocialIcon className="App-social-icon-navbar" url="https://www.instagram.com/_leburc/" bgColor="#ffffff" />
        </Navbar.Item>
        <Navbar.Item>
          <SocialIcon className="App-social-icon-navbar" url="https://github.com/Rubelium/leburc-app" bgColor="#ffffff" />
        </Navbar.Item>
        <Navbar.Item>
          <SocialIcon className="App-social-icon-navbar" url="mailto:dj.leburc@gmail.com" bgColor="#ffffff" />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}

export default AppNavbar;