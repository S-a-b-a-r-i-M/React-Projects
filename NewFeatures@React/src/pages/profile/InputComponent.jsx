import { useState } from 'react'
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { Edit } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group'
import PropTypes from 'prop-types'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import TagInput from '../../components/tag-input'

export function RadioGroupComponent({ keyName, options, value, onChange, testid }) {
  console.log(keyName)
  return (
    <RadioGroup
      data-testid={testid}
      className="w-full flex justify-between items-center"
      value={value}
      onValueChange={(e) => onChange(keyName, e)}
    >
      {options?.map(({ label, value: val }) => (
        <div key={label} className="block items-center sm:flex mb-2 sm:mb-0">
          <RadioGroupItem value={val} id={label} className="mr-2" variant="squre" />
          <Label htmlFor={label}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}

RadioGroupComponent.propTypes = {
  testid: PropTypes.string.isRequired,
  keyName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export function SelectComponent({ keyName, options, value, onChange: onSelect, testid }) {
  return (
    <Select
      data-testid={testid}
      className="w-full flex justify-between items-center"
      value={value}
      onValueChange={(e) => onSelect(keyName, e)}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        {options?.map(({ label, value: val }) => (
            <SelectItem key={label} value={val}>{label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

SelectComponent.propTypes = {
  testid: PropTypes.string.isRequired,
  keyName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}


function ProfileEditorField({  }) {

  const id="name"
  const labelName = "Name"
  const value = undefined
  const placeholder="Enter your name"
  const type = "text"
  const onChange = () => {
    console.log("onChange")
  }

  const [isEdit, setIsEdit] = useState(false)
  const [val, setVal] = useState(value)
  const [values, setValues] = useState([])

  const handleSave = (e) => {
    onChange(e.target.value)
    setIsEdit(false)
    console.log("onChange", e.target.value)
  }

  const handleSkillsSave = () => {
    setIsEdit(false)
    console.log("handleSkillsSave", values)
  }

  const handleSaveWithKey = (keyName, value) => {
    // onChange(e.target.value)
    setIsEdit(false)
    console.log("onChange", keyName, value)
  }

  const handleCancel = (e) => {
    onChange(e.target.value)
    setIsEdit(false)
    console.log("onChange", e.target.value)
  }

  const genderOptions = [
    {label:"Male", value:"male"},
    {label:"Female", value:"female"},
    {label:"Other", value:"other"},
  ]

  const monthOptions = [
    {label:"January", value:"january"},
    {label:"February", value:"february"},
    {label:"March", value:"march"},
    {label:"April", value:"april"},
    {label:"May", value:"may"},
    {label:"June", value:"june"},
    {label:"July", value:"july"},
    {label:"August", value:"august"},
    {label:"September", value:"september"},
    {label:"October", value:"october"},
    {label:"November", value:"november"},
    {label:"December", value:"december"},
  ]

  const dateOptions = []
  for(let i=1; i<=31; i++)
    dateOptions.push({label:i, value:i})

  const yearOptions = []
  const currentYear = new Date().getFullYear()
  for(let i=currentYear-100; i<=currentYear; i++)
    yearOptions.push({label:i, value:i})

  return (
    <>
      <div className="w-full flex items-start px-4">
         {/* Label */}
        <Label htmlFor={id} className="w-1/4 text-lg">{labelName}</Label>

         {/* Content */}
        <div className='w-2/4 text-lg'>
          {isEdit ? (
            // based on the type i have to render different types
            <>

              {/* NAME */}
              {/* <Input 
                id={id}
                value={val}
                placeholder={placeholder}
                className="max-w-[75%] lg:max-w-[50%]"
                onChange={(e) => setVal(e.target.value)} 
              /> */}

              {/* GENDER */}
              {/* <div className="max-w-[75%] lg:max-w-[50%]">
                <RadioGroupComponent 
                  keyName="gender"
                  options={genderOptions}
                  value="male"
                  onChange={handleSaveWithKey}
                  testid="gender"
                />
                <div className="space-x-3 pt-3">
                  <Button onClick={handleSave}>Save</Button>
                  <Button onClick={handleCancel}>Cancel</Button>
                </div>
              </div> */}

              {/* BIRTH DAY */}
              {/* <div className="flex justify-around">
                <SelectComponent 
                  keyName="month"
                  options={monthOptions}
                  value="january"
                  onChange={handleSaveWithKey}
                  testid="month"
                />
                <SelectComponent 
                  keyName="date"
                  options={dateOptions}
                  value={1}
                  onChange={handleSaveWithKey}
                  testid="date"
                />
                <SelectComponent 
                  keyName="year"
                  options={yearOptions}
                  value={currentYear}
                  onChange={handleSaveWithKey}
                  testid="year"
                />
              </div> */}
              {/* <Input 
                id={id}
                type="date"
                value={val}
                placeholder={placeholder}
                className="max-w-[75%] lg:max-w-[50%]"
                onChange={(e) => setVal(e.target.value)} 
              /> */}

              <TagInput
                values={values}
                setValues={setValues}
                className="max-w-[75%] lg:max-w-[50%] border-2 border-gray-200 rounded-lg"
              />
              <div className="space-x-3 pt-3">
                <Button onClick={handleSkillsSave}>Save</Button>
                <Button onClick={handleCancel}>Cancel</Button>
              </div>
            </>
          ) : (
            <span className={`${val ? "" : "text-slate-400"}`}>{val || placeholder}</span>
          )}
        </div>

        {/* Edit */}
        {!isEdit && (
          <div className="w-1/4 text-end">
            <Button 
              className="text-lg pt-0" 
              variant="icon"
              onClick={() => setIsEdit(!isEdit)}
            >
              <Edit className="w-5 h-5" />
              Edit
            </Button>
          </div>
        )}
      </div>
      <hr className='w-full my-2'/>
    </>
  )
}

export default ProfileEditorField