import { Link } from "react-router-dom";

export const Navbar = () => {
  return (

      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to='/' className="text-decoration-none h5">Mineria de Datos</Link>
        </div>
      </nav>

  );
};
