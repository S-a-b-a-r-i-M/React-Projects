import { CheckCircle } from "lucide-react"
import codeImg from '../assets/code.jpg'
import { checklistItems } from "../constants/constants"

function Workflow() {
  return (
    <div className="my-16 md:my-24">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center tracking-wide">
        Accelerate your
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
          {" "}coding workflow
        </span>
      </h2>
      <div className="w-full flex flex-wrap mt-10">
        <div className="w-full lg:w-1/2">
          <img src={codeImg} alt="codeImg" />
        </div>

        <div className="w-full lg:w-1/2">
          {checklistItems.map((item, idx) => (
            <div key={idx} className="flex gap-x-5 my-10">
              <div className="w-8 h-8 flex justify-center items-center bg-neutral-800 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h5 className="text-xl">{item.title}</h5>
                <p className="text-neutral-500 tracking-wide mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Workflow