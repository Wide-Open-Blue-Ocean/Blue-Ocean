import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import 'bulma/css/bulma.min.css';

  const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          {/* burger */}
          <div className="navbar-brand">
          <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/"
              >
                Workout Pal
              </NavLink>
              </div>
              <div className="navbar-end">
            <a
              role="button"
              className={`navbar-burger burger ${isOpen && "is-active"}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => setOpen(!isOpen)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          {/* burger  end*/}

          <div className={`navbar-menu ${isOpen && "is-active"}`}>
            <div className="navbar-end">
              <NavLink className="navbar-item" activeClassName="is-active" to="/">
                Home
              </NavLink>

              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/Calendar"
              >
                Calendar
              </NavLink>

              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/Workout"
              >
                Workout
              </NavLink>

              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/Meals"
              >
                Meals
              </NavLink>

              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/Journal"
              >
                Journal
              </NavLink>
            {/* </div> */}

            {/* <div className="navbar-end"> */}
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-white">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
export default Navbar;
