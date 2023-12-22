import React from 'react'
import "./index.css"
function MainBtn(a) {
  return (
    <button className={ a.bg === "pink" ? "blue pink" : "blue"}>
{a.btnText}
    </button>
  )
}

export default MainBtn