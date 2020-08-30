import React, { useState } from 'react';
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
 import data from '../data/data.json'
 import classnames from 'classnames';
import "../style.scss"

// const  newdata= data.map( ( data) =>{
//     return  (
    
//        <Card  key= {data.id}>
//        <CardImg top width="100%" src={data.image} alt="Card image cap" />
//         <div className="reviews">
//           <img src={require('../image/heart.png')}></img>
//         </div>
//        <CardBody>
//          <CardTitle> {data.dish_name}</CardTitle>
//          <CardSubtitle> <img src={require("../image/star.png")}></img>  {data.dish_rating} <span>(23)</span></CardSubtitle>
       
//         <div className="d-flex footer-card">
//           <img src={require('../image/review.png')}></img>
//           <h3 className="orange-price">  {data.dish-price} </h3>
//         </div>
//        </CardBody>
//      </Card>
    
//     )
//   }
// )
export default newdata;