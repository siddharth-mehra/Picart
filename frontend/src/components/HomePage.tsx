import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShinyButton } from "./magicui/shiny-button";


const HeroSection = () => {
  // State to store scroll position
  const [scrollY, setScrollY] = useState(0);

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity based on scroll position
  const fadeInOpacity = (elementPosition:number) => {
    const windowHeight = window.innerHeight;
    const scrollPosition = scrollY;
    const fadeStart = elementPosition - windowHeight; // Start fading in before element reaches the top
    const fadeEnd = elementPosition; // Fully visible at this point

    // Calculate opacity (smooth transition from 0 to 1)
    if (scrollPosition > fadeStart) {
      const opacity = Math.min((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 1);
      return opacity;
    }
    return 0;
  };

  return (
    <div className='relative w-full min-h-screen bg-black/[0.96] overflow-x-hidden'>
      <div className="w-full h-screen absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Base glow */}
        <div className="absolute w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle_at_center,#ffffff14_0%,#ffffff05_45%,transparent_65%)] blur-2xl"></div>
        {/* Brighter center */}
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,#ffffff30_0%,#ffffff10_35%,transparent_65%)] blur-xl"></div>
        {/* Sharp center point */}
        <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,#ffffff40_0%,#ffffff20_25%,transparent_50%)] animate-pulse"></div>
      </div>
      <div className="max-w-[1280px] mx-auto min-h-screen flex flex-col justify-center items-center relative z-10">
        {/* Motion div with fade-in effect on scroll */}
        <motion.div
          className="max-w-[800px] flex flex-col items-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{
            opacity: fadeInOpacity(400), // Change this value as needed based on when it should fade in
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <h1 className="text-4xl md:text-7xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Unleash Your Creativity with AI-Generated Art
          </h1>
          <p className="text-center max-w-[600px] text-zinc-200">
            Transform your ideas into stunning visuals in just a few clicks. Our powerful AI-driven image generation tool helps you create custom artwork, illustrations, and designs that bring your imagination to life.
          </p>
          <div className=" gap-y-4 gap-x-4 flex items-center flex-col justify-center md:flex-row m-4">
            <ShinyButton 
              className="dark py-3 px-4 bg-black text-zinc-200 border border-zinc-800 font-semibold"
              onClick={() => console.log("Clicked!")}
              style={{ "--primary": "210 40% 98%" } as React.CSSProperties}
            >
              Explore More
            </ShinyButton>
            <ShinyButton 
              className=" py-3 px-4 bg-white text-black border border-zinc-900 font-semibold"
              onClick={() => console.log("Clicked!")}
              style={{ "--primary": "210 40% 98%" } as React.CSSProperties}
            >
              Explore More
            </ShinyButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

