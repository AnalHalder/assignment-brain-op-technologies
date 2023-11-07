import React from 'react'
import {HashLink} from "react-router-hash-link"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
        <h1>Assignment</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/ballons"}>Ballons</Link>
            <Link to={"/user-form"}>UserForm</Link>
        </main>
    </nav>
  )
}

export default Header