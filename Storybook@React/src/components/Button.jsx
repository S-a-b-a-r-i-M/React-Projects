import PropTypes from 'prop-types'

function Button({ name, variant="primary", fontSize="15", isRounded=true, onClick }) {
   
  return (
    <button 
      style={{
        border: `1px solid`,
        backgroundColor: `${variant.toLowerCase() === "primary" ? "blue" : "white"}`,
        color: `${variant.toLowerCase() === "primary" ? "white" : "black"}`,
        fontSize: `${fontSize}px`,
        borderRadius: `${isRounded ? "5px" : "0"}`,
        padding: "4px 8px",
      }}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  fontSize: PropTypes.string,
  isRounded: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button