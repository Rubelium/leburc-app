import logoLettering from "../images/leburcLogoLettering.png"
import NotificationIcon from "../icons/NotificationIcon";
import { Chip, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { SocialIcon } from "react-social-icons";
import { scrollToTop } from "../helpers/scrollToTop";

function AppNavigationBar() {
  return (
    <Navbar className="text-white bg-black">
      <NavbarBrand>
        <div className="cursor-pointer" onClick={scrollToTop}>
          <img
            src={logoLettering}
            width={128}
            height={21}
            className="App-leburc-logo-lettering-navbar"
            alt="Loading..."
          />
        </div>
      </NavbarBrand>
      <NavbarContent justify="end">
        <div className="hidden sm:flex gap-4">
          <NavbarItem className="pt-2 font-kanit hidden md:flex">
            <Chip
              startContent={<NotificationIcon size={18} />}
              variant="flat"
              color="success"
              size="sm"
            >
              <p className="pr-1">Website Under Construction</p>
            </Chip>
          </NavbarItem>
          <NavbarItem>
            <SocialIcon
              className="App-social-icon-navbar h-[40px] w-[40px]"
              url="https://soundcloud.com/leburc"
              bgColor="#ffffff"
            />
          </NavbarItem>
          <NavbarItem>
            <SocialIcon
              className="App-social-icon-navbar h-[40px] w-[40px]"
              url="https://www.instagram.com/leburc.music/"
              bgColor="#ffffff"
            />
          </NavbarItem>
          <NavbarItem>
            <SocialIcon
              className="App-social-icon-navbar h-[40px] w-[40px]"
              url="https://github.com/Rubelium/leburc-app"
              bgColor="#ffffff"
            />
          </NavbarItem>
          <NavbarItem>
            <SocialIcon
              className="App-social-icon-navbar h-[40px] w-[40px]"
              url="mailto:dj.leburc@gmail.com"
              bgColor="#ffffff"
            />
          </NavbarItem>
        </div>
        <NavbarMenuToggle className="sm:hidden" />
      </NavbarContent>
      <NavbarMenu className="pt-4 text-white">
        <NavbarMenuItem className="pt-2 pb-4 font-kanit">
          <Chip
            startContent={<NotificationIcon size={18} />}
            color="success"
            size="sm"
            variant="flat"
          >
            <p className="pr-1">Website Under Construction</p>
          </Chip>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="https://soundcloud.com/leburc">
            <SocialIcon
              className="App-social-icon-navbar h-[40px] w-[40px]"
              network="soundcloud"
              bgColor="#ffffff"
            />
            <span className="pl-2">SoundCloud</span>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="https://www.instagram.com/leburc.music/">
            <SocialIcon
              className="App-social-icon-navbar h-[40px] w-[40px]"
              network="instagram"
              bgColor="#ffffff"
            />
            <span className="pl-2">Instagram</span>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="https://github.com/Rubelium/leburc-app">
            <SocialIcon
              className="App-social-icon-navbar h-[40px] w-[40px]"
              network="github"
              bgColor="#ffffff"
            />
            <span className="pl-2">GitHub</span>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="mailto:dj.leburc@gmail.com">
            <SocialIcon
              className="App-social-icon-navbar h-[40px] w-[40px]"
              network="email"
              bgColor="#ffffff"
            />
            <span className="pl-2">Email</span>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default AppNavigationBar;