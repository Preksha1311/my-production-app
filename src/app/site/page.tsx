import { DirectionAwareHoverDemo } from "@/components/landingPage/Categories";
import Footers from "@/components/landingPage/Footers";
import { ImagesSliderDemo } from "@/components/landingPage/Hero";
import NavbarDemo from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext";

export default function Home() {
  return (
 <AuthProvider>
    <main >
      {/* <LandingPage/> */
      /* <LogoHeader logoSrc="https://res.cloudinary.com/dja68ij3b/image/upload/v1716303194/p0h0ukx2mjkqvlnlrner.png" /> */
      /* <ModeToggle/> */
      /* <LoginPage/> 
     <Signup/> */}
     <NavbarDemo/>
      {/* <Hero /> */}
      <ImagesSliderDemo/>
      <h1 className="justify-self-center  ">Categories</h1>
      <DirectionAwareHoverDemo />
      {/* <InfiniteMovingCardsDemo/> */}
      <h1 className="justify-self-center">Projects</h1>
      <h1 className="justify-self-center">Collections</h1>
      <Footers />
    </main>
      </AuthProvider>
  );
}
