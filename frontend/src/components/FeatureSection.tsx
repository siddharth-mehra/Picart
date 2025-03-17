import {MacbookScroll} from './ui/macbook-scroll'; 
import image1 from '../assets/Joyful Child in Winter Wonderland.jpeg'; 
const FeatureSection = () => {
  return (
    <div className='bg-black w-full '>
        <div className='max-w-[1280px] mx-auto p-5 text-white flex items-center justify-center'>
            <MacbookScroll
        src={image1} // Use the imported image
        showGradient={true} // Set to true if you want the gradient effect
        title="Create your prompt Images and Explore Multiple Features"
        badge={<span className="text-sm text-white">A joyful moment captured!</span>}
            />
        </div>
    </div>
  )
}

export default FeatureSection
