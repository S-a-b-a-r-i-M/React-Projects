import { PrimaryButton, SecondaryButton } from "./Buttons"
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'


function HeroSection() {
  return (
    <div className="flex flex-col items-center">
      {/* Heading */}
      <h1 className="max-w-6xl text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-wide text-center
                     mt-10 md:mt-20">
        VirtualR build tools 
        <span className="bg-gradient-to-t from-orange-300 to-orange-700 bg-clip-text text-transparent">
          {" "}for developers
        </span>
      </h1>

      {/* Description */}
      <p className="max-w-6xl text-neutral-600 text-lg text-center mt-12">
        Empower your creativity and bring your VR app ideas to life with our intuitive developer tools.
        <br />Get started today and turn your imagination into immersive realities.
      </p>

      {/* Buttons */}
      <div className="flex gap-5 mt-12">
        <PrimaryButton>Start for free</PrimaryButton>
        <SecondaryButton>Documentation</SecondaryButton>
      </div>

      {/* Videos */}
      <div className="flex gap-6 mt-20">
        <video
         autoPlay
         loop
         muted
         className="w-1/2 rounded shadow-md shadow-orange-500"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
         autoPlay
         loop
         muted
         className="w-1/2 rounded shadow-md shadow-orange-500"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default HeroSection