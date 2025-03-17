import { useState, useEffect } from "react";
import * as motion from "motion/react-client";



const Home = () => {
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
      <div className="w-full min-h-screen absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      <div className="fixed w-full min-h-screen rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#00000000)]"></div>

      <div className="max-w-[1280px] mx-auto min-h-screen flex flex-col justify-center items-center">
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
          <h1 className="text-5xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Unleash Your Creativity with AI-Generated Art
          </h1>
          <p className="text-center max-w-[600px] text-zinc-400">
            Transform your ideas into stunning visuals in just a few clicks. Our powerful AI-driven image generation tool helps you create custom artwork, illustrations, and designs that bring your imagination to life.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

