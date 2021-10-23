import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
const Nav = () => {
  return (
    <Navrbar>
      <Link to="/">
        <img src={Logo} alt="" id="logo" />
      </Link>

      <ul>
        <li>
          <Link to="/">About me</Link>
        </li>
        <li>
          <Link to="/projects">My projects</Link>
        </li>
      </ul>
    </Navrbar>
  );
};
const Navrbar = styled.nav`
  height: 80px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 9;
  a {
    color: #fff;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    width: 150px;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    padding: 2rem 5rem;
    #logo {
      width: 100px;
    }
    ul {
      padding: 3rem 0rem;
      width: 100%;
      justify-content: flex-end;
      li {
        padding-left: 2rem;
      }
    }
  }
  @media (max-width: 400px) {
    padding: 2rem 1rem;
  }
`;
export default Nav;
