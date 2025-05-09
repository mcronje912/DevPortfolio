// src/components/navbar.tsx
import { useState } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { useLocation } from "react-router-dom";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the current route matches a nav item
  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <HeroUINavbar 
      maxWidth="xl" 
      position="sticky" 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen}
      className="bg-default-100/70 dark:bg-rich-black-400/80 backdrop-blur-md border-b border-default-200 dark:border-rich-black-300"
    >
      {/* Logo section */}
      <NavbarContent className="pr-4" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden" 
        />
        <NavbarBrand className="ml-2">
          <Link
            href="/"
            className="flex items-center gap-1 font-heading font-bold text-xl text-cerulean hover:scale-105 duration-200"
          >
            MC
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation Links */}
      <NavbarContent className="hidden lg:flex justify-center gap-4">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              className={clsx(
                "relative px-2 py-1",
                isActive(item.href) 
                  ? "text-cerulean font-semibold" 
                  : "text-default-600 dark:text-default-400 hover:text-cerulean"
              )}
              href={item.href}
            >
              {item.label}
              {/* Static underline for active items - no animation */}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cerulean rounded-full" />
              )}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Side Icons + Contact Button */}
      <NavbarContent justify="end">
        <div className="flex items-center gap-3">
          {/* GitHub icon */}
          <Link 
            isExternal 
            href={siteConfig.links.github} 
            className="text-default-600 dark:text-default-400 hover:scale-110"
          >
            <GithubIcon className="h-5 w-5" />
          </Link>
          
          {/* Theme toggle */}
          <ThemeSwitch />
          
          {/* Contact Button */}
          <NavbarItem className="hidden sm:flex">
            <Button
              as={Link}
              href="/contact"
              className="bg-cerulean text-white hover:bg-cerulean-600"
              size="sm"
              radius="full"
            >
              Contact Me
            </Button>
          </NavbarItem>
        </div>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="pt-6 bg-default-100/95 dark:bg-rich-black-400/95 backdrop-blur-md">
        <div className="flex flex-col gap-2 mt-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                href={item.href}
                size="lg"
                className={clsx(
                  "relative pl-2",
                  isActive(item.href) 
                    ? "text-cerulean font-semibold" 
                    : "text-default-600 dark:text-default-400"
                )}
              >
                {item.label}
                {/* Static indicator for mobile menu */}
                {isActive(item.href) && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-cerulean rounded-full" />
                )}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="mt-6 sm:hidden">
            <Button
              as={Link}
              href="/contact"
              className="bg-cerulean text-white w-full hover:bg-cerulean-600"
              size="md"
              radius="full"
            >
              Contact Me
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};