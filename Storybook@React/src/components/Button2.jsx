import PropTypes from 'prop-types'

const Button2 = ({ children, className, onClick }) => (
  <button 
    className={`min-w-32 font-bold rounded py-2 px-4 ${className}`}
    onClick={onClick}
  > 
    {children}
  </button>
)

Button2.propTypes = {
  children: PropTypes.node, // children is a node type
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button2