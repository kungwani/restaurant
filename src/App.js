import React, { useState }  from 'react';
import logo from './logo.svg';
import { IconName } from "react-icons/fa";
import {
  Container, Row, Col,TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle,CardText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Dropdown, CardImg, CardBody,
 CardSubtitle} from 'reactstrap';
import './App.css';
import Navbarmenu from './component/navbar';

import Footer from './component/footer';
import Main from './component/main';

function App() {
  const [activeTab, setActiveTab] = useState('1');

  
  return (
    <div className="App">
       <Navbarmenu/>
       <Main></Main>
      
      <Footer>
        
      </Footer>
    </div>
  );
}

export default App;
