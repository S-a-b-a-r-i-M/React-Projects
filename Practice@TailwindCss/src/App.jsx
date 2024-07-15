import './App.css'
import react_logo from "./assets/logo.png"

function App() {

  return (
    <>
     <div>
        <div className="bg-orange-500 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-300 m-1">Vite + React + Tailwind</h1>
        </div>
        <p className="text-orange-500 m-5">This is a paragraph styled with Tailwind CSS utility classes.</p>
        <button className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded">
          Click me
        </button>
        {/* using text transform */}
        <div className="overflow-hidden box-border h-20 w-40 border-4 border-orange-300">
          <p className="capitalize mt-3">the quick brown fox, jumps over the lazy Dog </p>
        </div>

        <button className="bg-violet-400 hover:bg-violet-500 text-white text-xl p-3 m-5">Lets start</button>
        {/* using custom css class */}
        <button className="btn">Stop</button>

        {/* Alert Component */}
        <div className="bg-red-100 border border-red-400 text-red-600 text-left py-1.5 px-2">
          <strong className="block md:inline">Alert!</strong> {/* If the screen size is mid or more than mid this strong element will be inline, otherwise block */}
          <span className="ml-1">Please enter your mobile number</span>
        </div>
      </div>

      <div className="max-w-sm flex mx-auto bg-pink-200 rounded-lg p-6 mt-2">
        <div className="flex-shrink">
          <img src={react_logo} alt="react vite logo" className="h-18 w-18"/>
        </div>
        <div className="ml-2 p-1">
          <h3 className="text-xl text-gray-600">React Js</h3>
          <p className="text-gray-400">This is one of the most famous js library</p>
        </div>
      </div>

      {/* Card Component */}
      <div className="container mx-auto mt-4">
        <div></div>
        <div></div>
      </div>

    </>
  )
}

export default App


{/* First <div>
    1.bg-white: This class sets the background color of the div to white.
    2.rounded-lg: This class adds a large border radius, making the div have rounded corners.
    3.shadow-md: This class applies a medium-sized drop shadow to the div, creating a subtle shadow effect.
    4.p-6: This class adds padding of size 6 (equivalent to 1.5rem or 24px) to the div element, 
           creating spacing between the content and the edges of the div.

    <h1> Tag
    1.text-2xl: This class sets the font size of the text to 2xl, which is equal to 1.5rem or 24px in Tailwind's default configuration.
    2.font-bold: This class applies a bold font weight to the text.
    3.text-gray-800: This class sets the text color to a specific shade of gray
    4.mb-1: This class adds a margin-bottom of size 4

    <button> Tag
    1.hover: This class applies a new background color (#1d4ed8) when the element is hovered over with the mouse cursor. 
    2.py-2: This class adds vertical padding (top and bottom) of size 2
    3.px-4: This class adds horizontal padding (left and right) of size 4
    4.rounded: This class adds a border radius to the element, creating rounded corners.

    Second <div>
    1.overflow-hidden:
    2.box-border h-20 w-40 border-4 border-orange-300:
    3.capitalize: 
    

*/}
