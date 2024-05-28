"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import LogoHeader from "../landingPage/LogoHeader";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi"; // Import hamburger and close icons

interface NavbarProps {
  className?: string;
}

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}
 
const handlelogin = async() =>{

}

function Navbar({ className }: NavbarProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black w-full my-0">
      <div
        className={cn(
          "fixed inset-x-0 mx-auto z-50 bg-black transition-all duration-300 ease-in-out",
          isSticky ? "visible" : "relative",
          className
        )}
      >
        <div className="relative container mx-auto px-4 py-2 flex items-center justify-between bg-black">
          <img
            src="https://res.cloudinary.com/dja68ij3b/image/upload/a_-90/a_90/c_crop,w_1820,h_720/v1716304333/gcsdqauuh0a4yhpkkjh6.png"
            className="h-auto w-auto max-h-20"
            alt="banner"
          />
          <div className="flex md:hidden ">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <HiX className="text-white w-8 h-8" />
              ) : (
                <HiMenu className="text-white w-8 h-8" />
              )}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Collections">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/something">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                  <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Products">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Glassware"
                    href="https://algochurn.com"
                    src="https://res.cloudinary.com/dja68ij3b/image/upload/v1716287708/our-websitr/qerisclcvkj34pezcdyj.jpg"
                    description="Prepare for tech interviews like never before."
                  />
                  <ProductItem
                    title="Wall Scone"
                    href="https://tailwindmasterkit.com"
                    src="https://res.cloudinary.com/dja68ij3b/image/upload/v1716287643/our-websitr/a74cuhewri28uveg24u0.jpg"
                    description="Production ready Tailwind css components for your next project"
                  />
                  <ProductItem
                    title="Table Lamp"
                    href="https://gomoonbeam.com"
                    src="https://res.cloudinary.com/dja68ij3b/image/upload/v1716287615/our-websitr/pqxwn35gcz10zrmeb8jq.jpg"
                    description="Never write from scratch again. Go from idea to blog in minutes."
                  />
                  <ProductItem
                    title="Chandelier"
                    href="https://userogue.com"
                    src="https://res.cloudinary.com/dja68ij3b/image/upload/v1716287560/our-websitr/xpng12f7vch9t9kddhde.jpg"
                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="About Us">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/hobby">Contact</HoveredLink>
                  <HoveredLink href="/individual">Terms & Conditions</HoveredLink>
                  <HoveredLink href="/team">Privacy Policy</HoveredLink>
                  <HoveredLink href="/enterprise">Login</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Login
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black px-4 pb-4">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Collections">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/something">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                  <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Products">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Glassware"
                    href="https://algochurn.com"
                    src="https://res.cloudinary.com/dja68ij3b/image/upload/v1716287708/our-websitr/qerisclcvkj34pezcdyj.jpg"
                    description="Prepare for tech interviews like never before."
                  />
                  <ProductItem
                    title="Wall Scone"
                    href="https://tailwindmasterkit.com"
                    src="https://res.cloudinary.com/dja68ij3b/image/upload/v1716287643/our-websitr/a74cuhewri28uveg24u0.jpg"
                    description="Production ready Tailwind css components for your next project"
                  />
                  <ProductItem
                    title="Table Lamp"
                    href="https://gomoonbeam.com"
                    src="https://res.cloudinary.com/dja68ij3b/image/upload/v1716287615/our-websitr/pqxwn35gcz10zrmeb8jq.jpg"
                    description="Never write from scratch again. Go from idea to blog in minutes."
                  />
                  <ProductItem
                    title="Chandelier"
                    href="https://userogue.com"
                    src="https://res.cloudinary.com/dja68ij3b/image/upload/v1716287560/our-websitr/xpng12f7vch9t9kddhde.jpg"
                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="About Us">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/hobby">Contact</HoveredLink>
                  <HoveredLink href="/individual">Terms & Conditions</HoveredLink>
                  <HoveredLink href="/team">Privacy Policy</HoveredLink>
                  <HoveredLink href="/enterprise">Login</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
            <button onClick={handlelogin} className="mt-4 w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarDemo;
