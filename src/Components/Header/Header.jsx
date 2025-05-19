import { Link } from "react-router-dom"
import Nav from "./Nav/Nav"
import "./Header.scss"
import Menu from "../../assets/Homepage/Svg/Menu.svg"

function Header() {
  return (
    <header className="header">
       <Link className="logo">Logo</Link>
      <Nav/>
      <div className="header-container">
        <button className="header-container__btn">Sign In</button>
        <button className="header-container__btn">Sign Up</button>
      </div>
      <img src={Menu} alt="Menu" className="header__menu" />
    </header>
  )
}

export default Header