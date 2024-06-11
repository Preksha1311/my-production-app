import Image from 'next/image';
import React from 'react';

interface LogoHeaderProps {
  logoSrc: string; // Path to your logo image
  className?: string; // Optional custom CSS classes
}

const LogoHeader: React.FC<LogoHeaderProps> = ({ logoSrc, className }) => {
  return (
    <header className={`fixed top-0 left-0 w-full bg-transparent z-50 ${className}`}>
      <div className="container mx-auto px-4 py-2 flex items-center justify-center bg-white">
        {/* <img src={logoSrc} alt="Your Logo" className="w-auto h-auto max-h-10" /> */}
       
      </div>
    </header>
  );
};

export default LogoHeader;
