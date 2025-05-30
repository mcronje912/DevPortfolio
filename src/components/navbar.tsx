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
import clsx from "clsx";
import { useLocation } from "react-router-dom";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";
import { ExternalLink } from "@/components/ExternalLink";
import { useAnalytics } from "@/hooks/useAnalytics";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { trackEvent } = useAnalytics();

  // Check if the current route matches a nav item
  const isActive = (href: string) => {
    return location.pathname === href;
  };
  
  // Track internal navigation
  const handleNavigation = (label: string, href: string) => {
    trackEvent('navigation_click', {
      link_name: label,
      destination: href,
      current_page: location.pathname
    });
  };

  return (
    <HeroUINavbar
      className="bg-default-100/70 dark:bg-rich-black-400/80 backdrop-blur-md border-b border-default-200 dark:border-rich-black-300"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Logo section */}
      <NavbarContent className="pr-4" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden focus:outline-none focus:ring-2 focus:ring-cerulean-500"
        />
        <NavbarBrand className="ml-2">
          <Link
            className="flex items-center gap-1 font-heading font-bold text-xl text-cerulean hover:scale-105 duration-200"
            href="/"
            aria-label="Marco Cronje Home"
            onClick={() => handleNavigation("Home Logo", "/")}
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
                "relative px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cerulean-500 rounded",
                isActive(item.href)
                  ? "text-cerulean font-semibold"
                  : "text-default-600 dark:text-default-500 hover:text-cerulean",
              )}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => handleNavigation(item.label, item.href)}
            >
              {item.label}
              {/* Static underline for active items - no animation */}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cerulean rounded-full" aria-hidden="true" />
              )}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Side Icons + Contact Button */}
      <NavbarContent justify="end">
        <div className="flex items-center gap-3">
          {/* GitHub icon */}
          <ExternalLink
            className="text-default-600 dark:text-default-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cerulean-500 rounded-full p-1"
            href={siteConfig.links.github}
            aria-label="GitHub Profile"
            trackingName="GitHub_Navbar"
          >
            <GithubIcon className="h-5 w-5" aria-hidden="true" />
          </ExternalLink>

          {/* Theme toggle */}
          <ThemeSwitch />

          {/* Contact Button */}
          <NavbarItem className="hidden sm:flex">
            <Button
              as={Link}
              className="bg-cerulean text-white hover:bg-cerulean-600 focus:outline-none focus:ring-2 focus:ring-cerulean-500 focus:ring-offset-2"
              href="/contact"
              radius="full"
              size="sm"
              onClick={() => handleNavigation("Contact Button", "/contact")}
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
                className={clsx(
                  "relative pl-2 focus:outline-none focus:ring-2 focus:ring-cerulean-500 rounded",
                  isActive(item.href)
                    ? "text-cerulean font-semibold"
                    : "text-default-600 dark:text-default-400",
                )}
                href={item.href}
                size="lg"
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => {
                  handleNavigation(`${item.label} (Mobile)`, item.href);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
                {/* Static indicator for mobile menu */}
                {isActive(item.href) && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-cerulean rounded-full" aria-hidden="true" />
                )}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="mt-6 sm:hidden">
            <Button
              as={Link}
              className="bg-cerulean text-white w-full hover:bg-cerulean-600 focus:outline-none focus:ring-2 focus:ring-cerulean-500"
              href="/contact"
              radius="full"
              size="md"
              onClick={() => {
                handleNavigation("Contact Button (Mobile)", "/contact");
                setIsMenuOpen(false);
              }}
            >
              Contact Me
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};