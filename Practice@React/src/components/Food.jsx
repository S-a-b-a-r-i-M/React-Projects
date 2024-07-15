import React from 'react'

const Food = () => {
  const food1 = "Briyani"  
  const food2 = "Parotta"

  return (
    <> 
      <ul>
          <li>"{food1}"</li>{/* using js variables inside jsx */}
          <li>{food2}</li>
          <li>Apple</li>
          <li>Banana</li>
      </ul>
    </>
  )
}

export default Food