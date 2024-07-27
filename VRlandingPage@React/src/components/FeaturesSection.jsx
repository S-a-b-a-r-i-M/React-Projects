import { features } from "../constants/constants"

function FeaturesSection() {
  return (
    <div className="my-20">
      <div className="text-center">
        <span className="text-sm text-orange-500 font-semibold bg-neutral-800 rounded-lg
                         uppercase py-1 px-2">
          features
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl tracking-wide my-10">
          Easily build 
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            {" "}your goal
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {features.map((feature) => (
            <div key={feature.text} className="flex gap-4 mt-10">
              <span className="w-8 h-8 text-orange-500 bg-neutral-800 rounded-lg p-1">
                {feature.icon}
              </span>
              <div>
                <h5 className="text-xl">{feature.text}</h5>
                <p className="min-h-[100px] text-neutral-500 bg-neutral-900 tracking-wide mt-6 p-2">
                  {feature.description}
                </p>
              </div>
            </div>  
          ))}
      </div>
      
    </div>
  )
}

export default FeaturesSection