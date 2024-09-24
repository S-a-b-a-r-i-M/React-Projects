import React from 'react'
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import * as z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Check, X } from 'lucide-react';
import PropTypes from 'prop-types'

function CheckBoxGroup({ options, value = [], onChange }) {
  const handleClick = (option) => {
    const isChecked = !(value.includes(option))
    const updatedValue = isChecked ? [...value, option] : value.filter(item => item !== option)
    
    onChange(updatedValue) 
  }

  return (
    <div className="w-2/3 grid grid-cols-3 justify-between gap-x-6 gap-y-3">
      {options.map((option) => (
        <div key={option} className="flex items-center gap-x-1 gap-y-2">
          <Checkbox 
            key={option} 
            data-testid={option} 
            value={option} 
            onClick={() => handleClick(option)} 
          />
          <Label>{option}</Label>
        </div>

      ))}
    </div>
  )
}

CheckBoxGroup.propTypes ={
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
}

function YesNoButton({ value, onChange }) {
  return (
    <div className="flex items-center">
      <Button
        variant="outline"
        className={`w-[71px] h-[38px] text-sm ${value === "yes" && "bg-blue-300"}  border border-[#D9DBDE] rounded p-1 mr-3`}
        onClick={() => onChange("yes")}
      >
        <Check className="w-[16px] h-[16px] inline mr-1" />Yes
      </Button>
      <Button
        variant="outline"
        className={`w-[71px] h-[38px] text-sm ${value === "no" && "bg-blue-300"} border border-[#D9DBDE] rounded p-1 mr-3`}
        onClick={() => onChange("no")}
      >
        <X className="w-[16px] h-[16px] inline mr-1" />No
      </Button>
    </div>
  )
}

YesNoButton.propTypes = { 
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

const formFields = {
	personalInfo:{
		name: { label: 'Name', status: 'Mandatory', placeholder: 'Enter Name' },
		email: { label: 'Email', status: 'Mandatory', placeholder: 'Enter Email' },
		headline: { label: 'Headline', status: 'Off', placeholder: 'Enter Headline' },
		phone: { label: 'Phone', status: 'Mandatory', placeholder: 'Enter Contact Phone' },
		address: { label: 'Address', status: 'Mandatory', placeholder: 'Enter Current Address' },
		prefLocation: { label: 'Preferred Location', status: 'Optional', placeholder: 'Enter Preferences' },
	},
	backgroundInfo:{
    CTC: { label: 'CTC', status: 'Mandatory' },
		portfolioLink: { label: 'Work link/Portfolio', status: 'Mandatory', placeholder: 'Enter Portfolio Link' },
		noticePeriod: { label: 'Notice Period', status: 'Optional', placeholder: 'Enter Notice Period' },
	},
  detailsInfo: {
    coverLetter: { label: "Cover Letter", status: "Optional" },
  },
	questions: [
    {
      question: 'Are you willing to relocate to Hyderabad ?',
      type: 'Yes/No',
      isMandatory: true,
      options: []
    },
    {
      question: 'Master of which technology ?',
      type: 'MultipleChoice',
      isMandatory: false,
      options: [ 'c', 'c+=', 'java', 'python', 'react' ]
    }
  ]
}

// const formSchema = 

function ApplicationForm() {
  const form = useForm({})
  const { personalInfo, backgroundInfo, detailsInfo, questions} = formFields

  const onFormSubmit = (data) => {
    console.log(data)
  }

  const isFieldVisible = (status) => status.toLowerCase() !== "off"

  const renderFromField = (key, field, placeholder) => {  
    switch(key){
      // Personal Info
      case "name":
        return(
          <div className="grid grid-cols-[2px] md:grid-cols-2 gap-3 lg:gap-x-5">
            <Input type="text" placeholder={placeholder} {...field}/>
            <div>
              <FormField
                name="lastName"
                control={form.control}
                render= {({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="text" placeholder={placeholder} {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )
      case "email":
      case "headline":
      case "address":
      case "prefLocation":
        return <Input type="text" placeholder={placeholder} {...field}/>
      case "phone":
        // FIX
        return <Input type="text" placeholder={placeholder} {...field}/>
      // Background Info
      case "CTC":
        return(
          <div className="grid grid-cols-[2px] md:grid-cols-2 gap-3 lg:gap-x-5">
            <Input type="number" placeholder="Enter Current CTC" {...field}/>
            <div>
              <FormField
                name="expectedCTC"
                control={form.control}
                render= {({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="number" placeholder="Enter Expected CTC" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )
      case "portfolioLink":
        return <Input type="text" placeholder={placeholder} {...field}/>
      case "noticePeriod":
        return <Input type="text" placeholder={placeholder} {...field}/>
      // Details Info
      case "coverLetter":
        {/* Fix */}
        return <Input type="text" {...field}/>
      default:
        return null
  }}
  const renderCustomQuestionField = (questionType, options, field) => {
    switch(questionType){
      case "SingleLine":
        return <Input type="text" placeholder="Enter here" {...field}/>
      case "MultipleChoice":
        return (
          <CheckBoxGroup 
            options={options}
            {...field}
          />
        )
      case "Yes/No":
        return (
          <div className="flex items-center">
            <YesNoButton {...field} />
          </div>
        )
      case "Dropdown":
        return (
          <select
            name=""
            id=""
            className="w-full text-sm bg-white border border-[#D9DBDE] rounded p-2"
            {...field}
          >
            <option value="">Select</option>
            {options.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        )
      case "Date":
        return <Input type="date" {...field}/>
      case "Number":
        return <Input type="Number" placeholder="Enter a digit" {...field}/>
      case "FileUpload":
        return <Input type="file" {...field}/>
      case "Paragraph":
        return (
          <textarea
            className="w-3/4 text-sm border rounded p-2"
            rows="5"
            placeholder="Enter your response here"
            {...field}
          />
        )
      default:
        return null
    }
  }

  const getStatus = (isMandatory) => (
    <span className={`text-xs ${isMandatory ? "text-red-600" : "text-[#d9dbde]"} ml-[2px]`}>
      {isMandatory ? "*" : "(optional)"}
    </span>
  )

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)} className='grid grid-cols-2 gap-x-2 space-y-5'>
        {[personalInfo, backgroundInfo, detailsInfo].map((info) => (
            Object.entries(info).map(
            ([key, {label, status, placeholder}]) => (
              isFieldVisible(status) && (
                <FormField
                  className=""
                  key={key}
                  name={key}
                  control={form.control}
                  render = {({ field })=>(
                    <div className={`${["email", "phone", "address", "prefLocation", "coverLetter"].includes(key) ? "" : "col-span-2"}`}>
                    <FormItem>
                      <FormLabel>
                        {label}
                        {getStatus(status === "Mandatory")}
                      </FormLabel>
                      <FormControl>
                        {renderFromField(key, field, placeholder)}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    </div>
                  )}
                />)
          )))
        )}
        {/* Custom Questions */}
        {questions?.map((question) => (
          <FormField
            key={question.question}
            name={question.question}
            control={form.control}
            render={({ field }) => (
            <div className="col-span-2">
              <FormItem>
                <FormLabel>
                  {question.question}
                  {getStatus(question.isMandatory)}
                </FormLabel>
                <FormControl>
                  {renderCustomQuestionField(question.type, question.options, field)}
                </FormControl>
              </FormItem>
            </div>
            )}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default ApplicationForm

/*  {{Object.entries(backgroundInfo).map(
  ([key, {label, status}]) => (
    isFieldVisible(status) && (
      <FormField 
        key={key}
        name={key}
        control={form.control}
        render = { ({ field }) => (
          <FormItem>
            <FormLabel>
              {label}
              <span className={`text-xs ${status === "Mandatory" ? "text-red-600" : "text-[#d9dbde]"} ml-[2px]`}>
                {status === "Mandatory" ? "*" : "(optional)"}
              </span>
            </FormLabel>
            <FormControl>
              {renderFromField(key, field)}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />)
  ))
}

{Object.entries(detailsInfo).map(
  ([key, {label, status}]) => (
    isFieldVisible(status) && (
      <FormField 
        key={key}
        name={key}
        control={form.control}
        render = {({ field}) => (
          <FormItem>
            <FormLabel>
              {label}
              <span 
                className={`text-xs ${status === "Mandatory" ? "text-red-600" : "text-[#d9dbde]"} ml-[2px]`}
              >
                {status === "Mandatory" ? "*" : "(optional)"}
              </span>
            </FormLabel>
            <FormControl>
              {renderFromField(key, field)}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />)
  ))
} } */