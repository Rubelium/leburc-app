import logoLettering from "../images/leburcLogoLettering.png"
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { SocialIcon } from "react-social-icons";
import { ScrollToTop } from "../helpers/ScrollToTop";

function AppNavigationBar() {
  return (
    <Navbar className="text-white bg-black">
      <NavbarBrand>
        <div className="cursor-pointer" onClick={ScrollToTop}>
          <img src={logoLettering} className="App-leburc-logo-lettering-navbar h-[21px]" alt="Loading..." />
        </div>
      </NavbarBrand>
      <NavbarContent justify="end">
        <div className="hidden sm:flex gap-4">
          <NavbarItem>
            <SocialIcon className="App-social-icon-navbar" url="https://soundcloud.com/leburc" bgColor="#ffffff" />
          </NavbarItem>
          <NavbarItem>
            <SocialIcon className="App-social-icon-navbar" url="https://www.instagram.com/leburc.music/" bgColor="#ffffff" />
          </NavbarItem>
          <NavbarItem>
            <SocialIcon className="App-social-icon-navbar" url="https://github.com/Rubelium/leburc-app" bgColor="#ffffff" />
          </NavbarItem>
          <NavbarItem >
            <SocialIcon className="App-social-icon-navbar" url="mailto:dj.leburc@gmail.com" bgColor="#ffffff" />
          </NavbarItem>
        </div>
        <NavbarMenuToggle className="sm:hidden" />
      </NavbarContent>
      <NavbarMenu className="pt-4 text-white">
        <NavbarMenuItem>
          <Link href="https://soundcloud.com/leburc" showAnchorIcon>
            <SocialIcon className="App-social-icon-navbar" network="soundcloud" bgColor="#ffffff" />
            <span className="pl-2">SoundCloud</span>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="https://www.instagram.com/leburc.music/" showAnchorIcon>
            <SocialIcon className="App-social-icon-navbar" network="instagram" bgColor="#ffffff" />
            <span className="pl-2">Instagram</span>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="https://github.com/Rubelium/leburc-app" showAnchorIcon>
            <SocialIcon className="App-social-icon-navbar" network="github" bgColor="#ffffff" />
            <span className="pl-2">GitHub</span>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="mailto:dj.leburc@gmail.com" showAnchorIcon>
            <SocialIcon className="App-social-icon-navbar" network="email" bgColor="#ffffff" />
            <span className="pl-2">Email</span>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar >
  );
}

export default AppNavigationBar;