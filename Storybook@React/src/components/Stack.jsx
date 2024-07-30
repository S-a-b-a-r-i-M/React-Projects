import PropTypes from 'prop-types'

function Stack({ children, wrap=false, gap=0.25 }) {
// className={`flex ${direction} ${space}rem ${wrap? "flex-wrap": ""}`}
  // space = space * 0.25
  return (
    <div 
      style={{
        display: "flex",
        direction: "column",
        wrap: wrap ? "wrap" : "nowrap",
        gap: gap+"rem",
        margin: "1rem",
      }}
    >
      {children}
    </div>
  )
}

Stack.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(["row", "column"]),
  gap: PropTypes.number,
  wrap: PropTypes.bool
}

export default Stack