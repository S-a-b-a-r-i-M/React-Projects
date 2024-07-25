import FeaturesSection from "./components/FeaturesSection"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>      
      <NavBar/>
      <div className="max-w-7xl mx-auto my-10 sm:my-20">
        <HeroSection />
        <FeaturesSection />
      </div>
    </>
  )
}

export default App
