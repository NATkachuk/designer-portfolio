import { Link } from "react-router-dom"
import Nav from "./Nav/Nav"
import "./Header.scss"

function Header() {
  return (
    <header className="header">
       <Link className="logo">Logo</Link>
      <Nav/>
      <div className="header-container">
        <button className="header-container__btn">Sign In</button>
        <button className="header-container__btn">Sign Up</button>
      </div>
    </header>
  )
}

export default Header