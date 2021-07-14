import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components'
import 'bulma/css/bulma.min.css';

const HoverText = styled.p`
	color: #000;
	:hover {
		color: #000;
		cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #fc1703;
    text-decoration-thickness: 3px;
	}`

  const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
      <nav
        className="navbar "
        aria-label="main navigation"
        style={{height: '80px', borderRadius: '0 0 20px 20px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}
      >
        <div className="container">
          {/* burger */}
          <div className="navbar-brand">
          <NavLink
                className="navbar-item "
                activeClassName="is-active"
                to="/"
                style={{height: '40px',textDecoration: 'none'}}
              >
                <HoverText style={{ color: 'rgb(73, 73, 73)', fontWeight: "bold", fontSize: "30px"}}>
                Workout Pal
                </HoverText>
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
              <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/"
              style={{backgroundColor: 'white', color: 'black', textDecoration: 'none'}}

              >
                <HoverText>
                  Home
                </HoverText>
              </NavLink>

              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/Calendar"
                style={{backgroundColor: 'white', color: 'black', textDecoration: 'none'}}

              >
                <HoverText>
                  Calendar
                </HoverText>
              </NavLink>

              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/Workout"
                style={{backgroundColor: 'white', color: 'black', textDecoration: 'none'}}


              >
                <HoverText>
                  Workout
                </HoverText>
              </NavLink>

              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/Meals"
                style={{backgroundColor: 'white', color: 'black', textDecoration: 'none'}}

              >
                <HoverText>
                  Meals
                </HoverText>
              </NavLink>

              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/Journal"
                style={{backgroundColor: 'white', color: 'black', textDecoration: 'none'}}
              >
                <HoverText>
                 Journal
                </HoverText>
              </NavLink>
            {/* </div> */}

            {/* <div className="navbar-end"> */}
              <div className="navbar-item">
                <div className="buttons">
                  <a
                    className="button is-white"
                    style={{backgroundColor: 'white', color: 'black', textDecoration: 'none'}}
                  >
                    <HoverText>
                      Log in
                    </HoverText>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
export default Navbar;
