import React, { useState } from 'react'
import "../index.css" 
import module_css from "../modules/Button.module.css"


const Button = () => {
  const [hover, setHover] = useState(false)

  const styles = {
      display: "block",
      backgroundColor: hover ? "yellowgreen" : "darkgreen",
      color: "whitesmoke",
      fontSize: "medium",
      border: "none",
      borderRadius: "50%",
      padding: "15px 20px",
      margin: "20px auto",
      cursor: "pointer",
      hover: "darkgreen",
  }
  
  function handleMouseEnter(){
    console.log(hover);
    setHover(true)
  }
  function handleMouseLeaver() {
    console.log();
    setHover(false)
  }

  return (
    <>
    <button className="button">External CSS</button> {/* External CSS*/}
    <button className={module_css.button}>Module CSS</button> {/* Module CSS */}
    <button 
      style={styles} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeaver}
    >
      Inline CSS
    </button>

    </>
  )
}

export default Button