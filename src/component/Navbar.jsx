import React from 'react'
import {Link} from "react-router"

function Navbar() {
  return (
    <div>
        <div>
        <Link to ={"/"}>Home</Link>
        </div>
        <div>
        <Link to ={"/About"}>About</Link>
        </div>
        <div>
        <Link to ={"/blogs"}>Blogs</Link>
        </div>
    </div>
    
  )
}

export default Navbar