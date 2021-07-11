import React from 'react';
import styled from 'styled-components';

// import { Navbar, Nav, Container } from 'bootstrap';
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;



const RightNavbar = ({open}) => {
  return (
    <>
      <Ul open={open}>
        <li>Home</li>
        <li>Calendar</li>
        <li>Workout</li>
        <li>Meals</li>
        <li>Journal</li>
      </Ul>
    </>
  )
}

export default RightNavbar;