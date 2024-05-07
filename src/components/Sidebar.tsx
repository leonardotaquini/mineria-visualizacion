import { Link } from "react-router-dom"
import './styles/sidebar.css'


export const Sidebar = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse h-100  ">
    <div className="position-sticky">
      <ul className="nav flex-column ">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Reports
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/data">
           Data
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}
