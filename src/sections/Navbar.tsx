"use client";
import { FC, useState } from "react";
import Logo from "@/assets/logo.svg";
import HamburgerMenu from "@/assets/hamburger-icon.svg";
import CloseIcon from "@/assets/close-icon.svg";
import DropDownIcon from "@/assets/drop-down-icon.svg";
import HomeIcon from "@/assets/home-icon.svg";
import CodeIcon from "@/assets/code-icon.svg";
import CloudIcon from "@/assets/cloud-icon.svg";
import BookIcon from "@/assets/book-icon.svg";
import SettingIcon from "@/assets/gear-icon.svg";
import SupportIcon from "@/assets/phone-support-icon.svg";
import LogoutIcon from "@/assets/sign-out-icon.svg";
import { twMerge } from "tailwind-merge";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const clickHandler = () => setIsMenuOpen(!isMenuOpen);
  const dropdownClickHandler = () => setIsDropdownOpen(!isDropdownOpen);

  const maxLengthName = (name: string) => {
    const len = name.length;
    if (len >= 10) {
      return name.slice(0,15).concat("...")
    }
  };

  const NavbarItems = () => (
    <div className="flex flex-col justify-between lg:items-start h-full">
      <div className="flex flex-col lg:w-full">
        <div
          className="flex justify-between items-center px-4 py-2 mt-4 border border-[#E9EAEB] rounded-lg mx-auto max-lg:hidden hover:cursor-pointer hover:bg-[#D5D7DA] w-full"
          onClick={dropdownClickHandler}
        >
          <p className="text-[#181D27] text-base font-normal">
            {maxLengthName("UtkarshDhariyaPanwar")}
          </p>
          <DropDownIcon
            className={twMerge(isDropdownOpen && "rotate-[180deg]")}
          />
        </div>
        <p className="inline-flex gap-4 items-center lg:justify-start text-[#414651] font-semibold hover:bg-[#E9EAEB] p-2 md:text-xl md:justify-center">
          <HomeIcon /> <span>Repositories</span>
        </p>
        <p className="inline-flex gap-4 items-center text-[#414651] lg:justify-start font-semibold hover:bg-[#E9EAEB] p-2 md:text-xl md:justify-center">
          <CodeIcon /> <span>AI Code Review</span>
        </p>
        <p className="inline-flex gap-4 items-center text-[#414651] font-semibold lg:justify-start hover:bg-[#E9EAEB] p-2 md:text-xl md:justify-center">
          <CloudIcon /> <span>Cloud Security</span>
        </p>
        <p className="inline-flex gap-4 items-center text-[#414651] lg:justify-start font-semibold hover:bg-[#E9EAEB] p-2 md:text-xl md:justify-center">
          <BookIcon /> <span>How to use</span>
        </p>
        <p className="inline-flex gap-4 items-center text-[#414651] font-semibold lg:justify-start hover:bg-[#E9EAEB] p-2 md:text-xl md:justify-center">
          <SettingIcon /> <span>Settings</span>
        </p>
      </div>
      <div className="flex flex-col lg:w-full">
        <p className="inline-flex gap-4 items-center text-[#414651] lg:justify-start font-semibold hover:bg-[#E9EAEB] p-2 md:text-xl md:justify-center">
          <SupportIcon /> <span>Support</span>
        </p>
        <p className="inline-flex gap-4 items-center text-[#414651] font-semibold lg:justify-start hover:bg-[#E9EAEB] p-2 md:text-xl md:justify-center">
          <LogoutIcon /> <span>Logout</span>
        </p>
      </div>
    </div>
  );

  return (
    <section className="fixed top-0 border-b border-[#E9EAEB] bg-white w-full lg:max-w-[250px] lg:h-screen">
      <div className="flex justify-between items-center p-4 lg:justify-start lg:flex-col">
        <h2 className="inline-flex justify-center items-center gap-2 text-2xl font-normal">
          <Logo /> <span>CodeAnt AI</span>
        </h2>
        <div onClick={clickHandler} className="lg:hidden">
          {!isMenuOpen ? <HamburgerMenu /> : <CloseIcon />}
        </div>
      </div>

      {/* Small Screen Dropdown */}
      <div className={twMerge("hidden", isMenuOpen && "block lg:hidden")}>
        <div
          className="flex justify-between items-center px-4 py-2 m-4 border border-[#E9EAEB] md:w-[576px] rounded-lg md:mx-auto hover:cursor-pointer hover:bg-[#D5D7DA]"
          onClick={dropdownClickHandler}
        >
          <p className="text-[#181D27] text-base font-normal">
            UtkarshDhariyaPanwar
          </p>
          <DropDownIcon
            className={twMerge(isDropdownOpen && "rotate-[180deg]")}
          />
        </div>
        <div
          className={twMerge(
            "mt-2 max-w-sm mx-auto hidden flex-col pb-4",
            isDropdownOpen && "flex"
          )}
        >
          <NavbarItems />
        </div>
      </div>

      {/* Large Screen Sidebar */}
      <div className="hidden lg:flex flex-col mt-4 px-4 lg:h-[calc(100%-15%)]">
        <NavbarItems />
      </div>
    </section>
  );
};

export default Navbar;
