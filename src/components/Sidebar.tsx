import { Link } from "react-router-dom"
import './styles/sidebar.css'


export const Sidebar = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse h-100">
    <div className="position-sticky">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/orders">
            Orders
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Reports
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Integrations
          </a>
        </li>
      </ul>
    </div>
  </nav>
  )
}
