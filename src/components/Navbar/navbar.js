import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import styled from 'styled-components'
import 'bulma/css/bulma.min.css';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {auth} from '../../SignIn';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import TodayIcon from '@material-ui/icons/Today';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import NoteIcon from '@material-ui/icons/Note';

const HoverText = styled.p`
	color: #000;
	:hover {
		color: #000;
		cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #fc1703;
    text-decoration-thickness: 3px;
	}`

  const Navbar = ({setLoggedIn}) => {
    const [isOpen, setOpen] = useState(false);


    console.log('loggedIN?:', setLoggedIn)
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
                <div class='background-img'></div>
                Dino-sore
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
              style={{ color: 'black', textDecoration: 'none'}}
              >
                <HoverText>
                  <HomeIcon/>
                </HoverText>
              </NavLink>

              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/Calendar"
                style={{ color: 'black', textDecoration: 'none'}}
              >
                <HoverText>
                  <TodayIcon/>
                </HoverText>
              </NavLink>

              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/Workout"
                style={{ color: 'black', textDecoration: 'none'}}
              >
                <HoverText>
                  <FitnessCenterIcon/>
                </HoverText>
              </NavLink>

              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/Meals"
                style={{ color: 'black', textDecoration: 'none'}}
              >
                <HoverText>
                  <FastfoodIcon/>
                </HoverText>
              </NavLink>

              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/Journal"
                style={{ color: 'black', textDecoration: 'none'}}
              >
                <HoverText>
                <NoteIcon/>
                </HoverText>
              </NavLink>
            {/* </div> */}

            {/* <div className="navbar-end"> */}
            <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/signin"
                style={{ color: 'black', textDecoration: 'none'}}
              >
                <HoverText
                  role='link'
                  onClick={
                      () => {
                    setLoggedIn(undefined)
                    firebase.auth().signOut()
                    }}><ExitToAppIcon/>
                </HoverText>
              </NavLink>

            </div>
          </div>
        </div>
      </nav>
    );
  };
export default Navbar;
