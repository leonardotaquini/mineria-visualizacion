import { Link } from "react-router-dom";
import './styles/navbar.css';

export const Navbar = () => {
  return (

      <nav className="navbar ">
        <div className="container-fluid">
          <Link to='/' className="text-decoration-none text-dark lead">Ciudad de Buenos Aires</Link>
        </div>
      </nav>

  );
};
