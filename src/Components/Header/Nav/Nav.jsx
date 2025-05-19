import { Link } from "react-router-dom"
import "./Nav.scss"
function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/">Home</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/about">About</Link>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">Work</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav