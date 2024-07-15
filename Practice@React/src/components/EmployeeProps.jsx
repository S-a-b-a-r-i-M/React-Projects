import React from 'react'
import "../index.css"
import PropTypes from 'prop-types'

//  can i give alias name for props ??
const EmployeeProps = ({id, name="employee", responsibilities=[], onClickHandler}) => {
  return (
    <div className="employee-card">
        <p>id: {id}</p>
        <p>name: {name}</p>
        <h4>Responsibilities</h4>
        <ul>
            {responsibilities.map((res, idx) => <li key={idx}>{res}</li> )}
        </ul>
        <button onClick={onClickHandler}>Click here</button>
    </div>
  )
}

EmployeeProps.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    responsibilities: PropTypes.arrayOf(PropTypes.string),
    onClickHandler: PropTypes.func
}

export default EmployeeProps


// Add the below code to APP.jsx
{/* <>
     <EmployeeProps 
      id={5}
      name="bro code"
      responsibilities={["requirement analysis","development","testing"]}
      onClickHandler={() => {console.log(`employee details is clicked`);}}/>

     <EmployeeProps 
      id={5}
      // name="bro code"
      // responsibilities={["requirement analysis","development","testing"]}
      onClickHandler={() => {console.log(`employee details is clicked`);}}/>
    </> */}
