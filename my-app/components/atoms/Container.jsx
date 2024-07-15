import React from "react"
import '../../app/globals.css'


function Container({ children }) {
  return (
    <div className="container_main px-[8%]">{children}</div>
  )
}

export default Container