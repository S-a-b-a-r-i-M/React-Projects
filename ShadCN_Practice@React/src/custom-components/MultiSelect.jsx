import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"
import Select from "react-select"


const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
]

const MultiSelect = () => {

  const handleChange = (selectedOptions) => {
    console.log(selectedOptions)
  }

  return (
    <div>
      <Select 
        isMulti
        options={options}
        name="fruits"
        placeholder="Select fruits..."
        onChange={handleChange}
        className="w-72 basic-multi-select"
      />
    </div>
  )
}

export default MultiSelect