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
  Container
} from 'reactstrap';
import "../style.scss"

const Navbarmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdowntoggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
      <Navbar color="light" light expand="md" >
      <Container>
     
        <NavbarBrand href="/"> <img src={require('../image/logo.png')} alt='error-icon.jpg' /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="mainmenu w-100">
          <Nav className="mr-auto" navbar>
            <NavItem>
             
              <Dropdown isOpen={dropdownOpen} toggle={dropdowntoggle}>
      <DropdownToggle caret>
      <img src={require('../image/placeholder.png')} alt='error-icon.jpg' /> Spaghetti at Rohnett, CA
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  
            </NavItem>
            <NavItem>
              <NavLink href="" className="yellow-btn"><img src={require('../image/pin.png')}></img>  Track Order</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=""><img src={require('../image/shoppingbag.png')} alt='error-icon.jpg' /></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav >
              <img src={require('../image/profile.png')} alt='error-icon.jpg' />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarmenu;