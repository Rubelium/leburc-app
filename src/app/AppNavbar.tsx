import logoLettering from "../images/leburcLogoLettering.png"
import { Link, Navbar } from "@nextui-org/react";
import { SocialIcon } from "react-social-icons";
import { ScrollToTop } from "../helpers/ScrollToTop";

function AppNavbar() {
  return (
    <Navbar>
      <Navbar.Brand>
        <div className="App-navbar-logo-wrapper" onClick={ScrollToTop}>
          <img src={logoLettering} className="App-leburc-logo-lettering-navbar" alt="Loading..." />
        </div>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item hideIn={"xs"}>
          <SocialIcon className="App-social-icon-navbar" url="https://soundcloud.com/leburc" bgColor="#ffffff" />
        </Navbar.Item>
        <Navbar.Item hideIn={"xs"}>
          <SocialIcon className="App-social-icon-navbar" url="https://www.instagram.com/_leburc/" bgColor="#ffffff" />
        </Navbar.Item>
        <Navbar.Item hideIn={"xs"}>
          <SocialIcon className="App-social-icon-navbar" url="https://github.com/Rubelium/leburc-app" bgColor="#ffffff" />
        </Navbar.Item>
        <Navbar.Item hideIn={"xs"}>
          <SocialIcon className="App-social-icon-navbar" url="mailto:dj.leburc@gmail.com" bgColor="#ffffff" />
        </Navbar.Item>
        <Navbar.Toggle showIn={"xs"} aria-label="toggle navigation" />
      </Navbar.Content>
      <Navbar.Collapse>
        <Navbar.CollapseItem>
          <Link href="https://soundcloud.com/leburc" color={"text"}>
            <SocialIcon className="App-social-icon-navbar" url="https://soundcloud.com/leburc" bgColor="#ffffff" />
            <span>&nbsp;&nbsp;SoundCloud</span>
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href="https://www.instagram.com/_leburc/" color={"text"}>
            <SocialIcon className="App-social-icon-navbar" url="https://www.instagram.com/_leburc/" bgColor="#ffffff" />
            <span>&nbsp;&nbsp;Instagram</span>
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href="https://github.com/Rubelium/leburc-app" color={"text"}>
            <SocialIcon className="App-social-icon-navbar" url="https://github.com/Rubelium/leburc-app" bgColor="#ffffff" />
            <span>&nbsp;&nbsp;GitHub</span>
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href="mailto:dj.leburc@gmail.com" color={"text"}>
            <SocialIcon className="App-social-icon-navbar" url="mailto:dj.leburc@gmail.com" bgColor="#ffffff" />
            <span>&nbsp;&nbsp;Email</span>
          </Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar >
  );
}

export default AppNavbar;