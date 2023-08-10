import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

export const CustomNavBar = styled(Navbar)`
  box-shadow: rgba(17, 12, 46, 0.15) 0 48px 100px 0;
`
export const NavBrand = styled(Navbar.Brand)`
  font-size: 16px;
  font-weight: bold;
`
export const NavLink = styled(Link)`
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
`
