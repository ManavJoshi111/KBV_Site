import React from 'react'
import { NavLink } from 'react-router-dom';
import "../CSS/Navbar.css";


const Navbar = () => {
//   const [Toggle, setToggle] = useState(false);
//   console.log(Toggle);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Logo</NavLink>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link active" + (isActive ? " active_class" : "")
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              {/*}
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link active" +
                    (isActive ? " active_class" : "") 

                  }
                  aria-current="page"
                  to="/activites"
                >
                  Activities
                </NavLink>
              </li>*/}

              
              <li className="nav-item dropdown">
			<NavLink className="nav-link dropdown-toggle "  to="/" data-bs-toggle="dropdown">Activities</NavLink>
		    <ul className="dropdown-menu fade-up">
			  <li><NavLink className="dropdown-item " to="/acti_1">Acti_1</NavLink></li>
			  <li><NavLink className="dropdown-item " to="/acti_2">Acti_2</NavLink></li>

			  <li><NavLink className="dropdown-item " to="/">No Page</NavLink></li>
        <li><NavLink className="dropdown-item " to="/">No Page</NavLink></li>
			  <li><NavLink className="dropdown-item " to="/">No Page</NavLink></li>
		    </ul>
		</li>
              
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link active" +
                    (isActive ? " active_class" : "") 
                  }
                  aria-current="page"
                  to="/Admission"
                >
                  Admission
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link active" +
                    (isActive ? " active_class" : "") 
                  }
                  aria-current="page"
                  to="/Academics"
                >
                  Academics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link active" +
                    (isActive ? " active_class" : "") 
                  }
                  aria-current="page"
                  to="/achievements"
                >
                  Achievements
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link active" +
                    (isActive ? " active_class" : "") 
                  }
                  aria-current="page"
                  to="/hostel"
                >
                  Hostel
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link active" +
                    (isActive ? " active_class" : "") 
                  }
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link active" +
                    (isActive ? " active_class" : "") 
                  }
                  aria-current="page"
                  to="/contact"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;