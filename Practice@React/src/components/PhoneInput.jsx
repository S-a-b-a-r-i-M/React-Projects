// import React, { useEffect, useState } from 'react'
// import 'react-phone-number-input/style.css'
// import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl} from 'react-phone-number-input/input'

// function MyPhoneInput() {
//   const [value, setValue] = useState("")

//   // useEffect(() =>{
//   //   console.log(value)
//   // },[value])

//   const handleValueChange = (value) => {
//     console.log(value);
//     console.log("National",formatPhoneNumber(value))
//     console.log("International",formatPhoneNumberIntl(value));
//     setValue(value)
//   }

//   return (
//     <div className='mt-10 h-screen w-screen flex justify-center items-center'>
//       <PhoneInput 
//         international
//         placeholder="Enter contact phone"
//         value={value}
//         onChange={handleValueChange}
//         countryCallingCodeEditable={false}
//       /> 
//     </div>
//   )
// }

// export default MyPhoneInput

import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl} from 'react-phone-number-input'
import { useState } from 'react'

function Example() {
  
  const [value, setValue] = useState("")


  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={(value, country) => console.log(value, country)} />
  )
}

export default Example