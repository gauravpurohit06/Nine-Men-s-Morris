import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">Nine Mens' Morris</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem>
        <Link to={routes.LANDING}>Landing</Link>
      </NavItem>
      <NavItem>
        <Link to={routes.HOME}>Home</Link>
      </NavItem>
      <NavItem>
        <Link to={routes.GAME_PAGE}>Play Game</Link>
      </NavItem>
      <NavItem><Link to={routes.ACCOUNT}>Account</Link></NavItem>
      <NavItem><SignOutButton /></NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>

const NavigationNonAuth = () =>
<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">Nine Mens' Morris</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem>
        <Link to={routes.LANDING}>Landing</Link>
      </NavItem>
      <NavItem>
        <Link to={routes.SIGN_IN}>Sign In</Link>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>

export default Navigation;
