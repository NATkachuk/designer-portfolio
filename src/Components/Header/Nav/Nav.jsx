import "./Nav.scss"
function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#">Home</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">About</a>
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