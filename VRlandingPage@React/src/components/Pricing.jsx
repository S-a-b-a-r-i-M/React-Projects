import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants/constants.jsx"

const PricingCard = ({option : {title, price, features}}) => (
  <div className="border border-neutral-600 rounded-2xl space-y-7 p-5">
    <h3 className="text-3xl">
      {title}
      {title === "Pro" && <span className="text-lg text-orange-700 mx-2">(Most Popular)</span>}
    </h3>
    <p className="text-3xl">{price}<span className="text-sm text-neutral-500">/month</span></p>
    <ul  className="space-y-5">
    {features.map((feature, idx)=>(
      <li key={idx} className="flex items-center gap-x-2">
        <CheckCircle2 className="w-5 h-5 text-neutral-300" />
        {feature}
      </li>
    ))}
    </ul>
    <div className="w-full flex justify-center">
      <button className="w-[80%] font-medium border border-orange-900 hover:bg-orange-900 
                         rounded-md px-4 py-2 my-4">
        Subscribe
      </button>
    </div>
  </div>
)


function Pricing() {
  return (
    <div className="my-16 md:my-24">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center tracking-wide">
        Pricing
      </h2>
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 my-10 mx-auto">
        {pricingOptions.map((option) => <PricingCard key={option.title} option={option}/> )}
      </div>
    </div>
  )
}

export default Pricing