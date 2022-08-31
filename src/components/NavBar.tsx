import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';

const NavBar = () => {
  const { setOpenModal } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="posts">Posts</Link>
            </li>
          </ul>
          <Link to="login" className="btn btn-primary" onClick={() => setOpenModal(true)}>
            LogIn
          </Link>
      </div>
    </nav>
  );
};

export default NavBar;