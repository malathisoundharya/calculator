import React from 'react'
import "./button.css"

function Button({sign,updateCount}) {
  const clickHandler = sign =>{
    updateCount(sign)
  }
  return <button className= {
    sign === "increment" ? "plus" :
    sign === "decrement" ? "minus" :
    sign === "Reset" ? "reset" :""
  } onClick={() => clickHandler(sign)}>
    {sign}
  </button>
}

export default Button