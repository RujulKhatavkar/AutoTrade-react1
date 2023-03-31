import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from './assets/Artboard 1.png';
export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} alt="React Logo" className="logo"/>
        AutoTrade
      </Link>
      <ul>
      <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/contact">Contact Us</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  //const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
