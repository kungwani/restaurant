import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Dropdown,
  Container,
  Row,
  Col
} from 'reactstrap';
import "../style.scss"

const Footer = (props) => {
    
  
    return (
        <div className="footer">
            <Container>
          <Row className="align-items-center">
            <Col md={3}>
              <img src={require('../image/godysh-logo copy.png')}></img>
            </Col>
            <Col md={3} className=" text-left">
             <h4>COMPANY</h4>
             <ul className="footer-menu">
                 <li>
                     <a href="">
                         About Us
                     </a>
                 </li>
                 <li>
                     <a href="">
                       Teams
                     </a>
                 </li>
                 <li>
                     <a href="">
                       Careers
                     </a>
                 </li>
             </ul>
            </Col>
            <Col md={3} className=" text-left">
             <h4>Conatct</h4>
             <ul className="footer-menu">
                 <li>
                     <a href="">
                         Resturat Partner
                     </a>
                 </li>
                 <li>
                     <a href="">
                       Help Center
                     </a>
                 </li>
                 <li>
                     <a href="">
                       FAQ
                     </a>
                 </li>
             </ul>
            </Col>
            <Col md={3} className=" text-left">
             <h4>Legal</h4>
             <ul className="footer-menu">
                 <li>
                     <a href="">
                        Term & Condition
                     </a>
                 </li>
                 <li>
                     <a href="">
                      Privacy Policy
                     </a>
                 </li>
                 <li>
                     <a href="">
                      Cookies Policy
                     </a>
                 </li>
             </ul>
            </Col>
          </Row>
        </Container>

        </div>
    )
}
export default Footer;