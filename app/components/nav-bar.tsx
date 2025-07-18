"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@nextui-org/button";

export const NavHeaderBar = () => {
  return (
    <Navbar
      isBordered
      className="backdrop-blur-md text-[#1F2A52] font-bold tracking-wide mt-5"
      maxWidth="full"
    >
      <NavbarContent className="gap-4" justify="start">
        <NavbarBrand>
          <img src="/quynhanh.svg" alt="Logo" className="h-8 w-auto ml-5" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="text-xl flex gap-10 ml-205 " justify="end">
        {["Home", "About", "Resume", "Project", "Contact"].map((label) => (
          <NavbarItem key={label}>
            <Button
              as="a"
              href={`#${label.toLowerCase()}`}
              className=" font-gaeilge text-[#E58DB5] hover:opacity-80 transition-all duration-200"
              variant="light"
            >
              {label}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};
