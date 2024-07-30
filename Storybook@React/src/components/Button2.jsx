import PropTypes from 'prop-types'

const Button2 = ({ children, className, OnClick }) => (
  <button 
    className={`font-bold rounded py-2 px-4 ${className}`}
    onClick={OnClick}
  >      
  {children}
  </button>
)

Button2.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  OnClick: PropTypes.func,
}

export default Button2