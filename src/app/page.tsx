import Image from "next/image";
import Signup from "./component/signupPage/page";
import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import LandingPage from "./component/gif";

import { ModeToggle } from "@/components/ui/theme-toggle";
import {NavbarDemo} from "./component/navbar/Navbar";
import { DirectionAwareHoverDemo } from "./component/landingPage/Categories";
import LogoHeader from "./component/landingPage/LogoHeader";
import Footers from './component/landingPage/Footers';
import { InfiniteMovingCardsDemo } from './component/landingPage/Projects';
import { ImagesSliderDemo } from './component/landingPage/Hero';
import { AuthProvider } from "@/context/AuthContext";
export default function Home() {
  return (
 <AuthProvider>
    <main >
      {/* <LandingPage/> */}
      {/* <LogoHeader logoSrc="https://res.cloudinary.com/dja68ij3b/image/upload/v1716303194/p0h0ukx2mjkqvlnlrner.png" /> */}

      {/* <ModeToggle/> */}
    
      {/* <LoginPage/> 
     <Signup/> */}
     <NavbarDemo/>
      {/* <Hero /> */}
      <ImagesSliderDemo/>
      <DirectionAwareHoverDemo />
      {/* <InfiniteMovingCardsDemo/> */}
      <Footers />
    </main>
      </AuthProvider>
  );
}
