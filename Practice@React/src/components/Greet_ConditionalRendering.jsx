import PropTypes from "prop-types"
import "../index.css"

const Greet = ({isLogged, userName}) => {
  const welcomeGreet = <h1 className="greet">
                        Welcome {userName}
                      </h1>
  const login_prompt = <h1 className="login-prompt">
                        Please Log-in to use 
                      </h1>
  
  return (
    isLogged ? welcomeGreet : login_prompt
  )
}

Greet.propTypes ={
  isLogged: PropTypes.bool,
  userName: PropTypes.string,
}

export default Greet


// Add the below code into App.jsx
/* <>
      <Greet isLogged={true} userName={"sabari"}/>
       <Greet isLogged={false} userName={"sabari"}/> 
</> 
*/
