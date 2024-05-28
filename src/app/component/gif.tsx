'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
const img = require("../../../public/image.png")
const LandingPage = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => setIsVisible(true), 2000); // Show after 2 seconds
      return () => clearTimeout(timeout);
    }, []);
  
    return (
      <div className="landing-page">
        {isVisible && (
          <Image
            src={img}
            alt="Chandelier Animation"
            width={400} // Adjust width and height as needed
            height={300}
            layout="fixed" // Maintain aspect ratio
          />
        )}
      </div>
    );
  };
  
  export default LandingPage;
  