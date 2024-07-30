import FeaturesSection from "./components/FeaturesSection"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Workflow from "./components/Workflow"

function App() {
  return (
    <>      
      <NavBar/>
      <div className="max-w-7xl mx-3 md:mx-auto my-10 sm:my-20">
        <HeroSection />
        <FeaturesSection />
        <Workflow />
        <Pricing />
        <Testimonials />
      </div>
    </>
  )
}

export default App
