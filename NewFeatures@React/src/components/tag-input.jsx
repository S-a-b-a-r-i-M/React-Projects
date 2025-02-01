import PropTypes from "prop-types"
import { X } from "lucide-react"
import { useState } from "react"

function TagInput({ values, setValues, className }) {
  const [value, setValue] = useState("")
  const handleValueChange = (e) => setValue(e.target.value)

  const addValues = (val) => {
    setValues((prev) => [...prev, val])
    setValue("")
  }

  const removeValue = (idx) => setValues((prevV) => prevV.filter((_, i) => i !== idx))
  const removeLastValue = () => setValues((prevV) => prevV.slice(0, -1))

  const handleKeyDown = (e) => {
    const val = e.target.value.trim()
    if (e.key === "Enter" && val) {
      e.preventDefault()
      addValues(e.target.value)
    } else if (e.key === "Backspace" && val === "" && values.length > 0) {
      e.preventDefault()
      removeLastValue()
    }
  }

  return (
    <div className={`max-w-3xl w-full flex flex-wrap bg-white p-1 ${className}`}>
      {/* All Tags */}
      {values?.map((val, idx) => (
        <div
          key={val}
          className="max-w-[90%] flex items-center gap-x-4 bg-[#F3F3F3] rounded-lg m-1 py-1 px-2"
        >
          <p className="truncate" title={val}>{val}</p>
          <X 
            className="w-[18px] h-[18px] bg-red-50 border-2 border-red-800 text-red-800 rounded-full cursor-pointer"
            onClick={() => removeValue(idx)}
          />
        </div>
      ))}
      {/* New Input */}
      <input
        type="text"
        className="w-28 text-sm inline focus:outline-none my-2 pl-1"
        placeholder="type and enter"
        value={value}
        onChange={handleValueChange}
        onKeyDown={handleKeyDown}
        data-testid="question_value_input"
      />
    </div>
  )
}

TagInput.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  setValues: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default TagInput
