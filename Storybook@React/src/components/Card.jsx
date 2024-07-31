import PropTypes from 'prop-types'

function Card({ imgUrl, title, subTitle, content, actionLabel, onAction, variant="default" }) {
  const baseClass = "w-1/2 rounded overflow-hidden shadow-lg"
  const variantClasses = {
    default: "bg-white",
    primary: "bg-blue-100",
    secondary: "bg-gray-100"
  }

  return (
    <div className={`${baseClass} ${variantClasses[variant]}`}>
      {imgUrl && <img src={imgUrl} alt="browser" className="h-48 object-cover" />}
      <div className="px-6 py-4">
      <h2 className="font-bold text-xl text-black mb-2">{title}</h2>
        {subTitle && <p className="text-gray-600 text-sm mb-1">{subTitle}</p>}
        <p className="text-gray-700 text-base">{content}</p>
      </div>

      {actionLabel &&
       <div className="px-6 pt-4 pb-2">
        <button 
          className="font-bold text-white bg-blue-500 hover:bg-blue-600 rounded py-2 px-4"
          onClick={onAction}
        >
          {actionLabel}
        </button>
       </div>
      }
    </div>
  )
}

Card.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  content: PropTypes.string.isRequired,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
  variant: PropTypes.oneOf(["default", "primary", "secondary"]),
}

export default Card