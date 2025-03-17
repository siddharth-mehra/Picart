import HeroSection from "./HomePage"
import FeatureSection from "./FeatureSection"

const Home = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <HeroSection/>
      <FeatureSection/>
    </div>
  )
}

export default Home
