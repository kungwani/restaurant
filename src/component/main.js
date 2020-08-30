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
 import menu from '../data/menu.json'
 import classnames from 'classnames';
 import Icons from './Icons'
import "../style.scss"

const Main = (props) => {
    const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdowntoggle = () => setDropdownOpen(prevState => !prevState);

  const  newdata= data.map( ( data) =>{
    //  alert(data.imageURL)
    return  (
        <Col md={3}>
       <Card  key= {data.id}>
       <CardImg top width="100%" src={Icons[data.imageURL]} alt="Card image cap" />
        <div className="reviews">
          <img src={require('../image/heart.png')}></img>
        </div>
       <CardBody>
         <CardTitle> {data.dish_name}</CardTitle>
         <CardSubtitle> <img src={require("../image/star.png")}></img>  {data.dish_rating} <span>(23)</span></CardSubtitle>
       
        <div className="d-flex footer-card">
          <img src={require('../image/review.png')}></img>
          <h3 className="orange-price">  {data.dish_price} </h3>
        </div>
       </CardBody>
     </Card>
     </Col>
    
    )
  }
)

    return (
        <Container>
        <div className="banner">
         
     <img src={require('../image/bannernew.png')} alt='error-icon.jpg' />
     <div className="banner-content">
        <div>
     <Row className="w-100"> <Col md={12}>
         <h2>Veggie Restaurant</h2>
       </Col></Row>
       <Row>
       <Col md={2} >
        <h5 className="d-flex align-items-center"><img src={require('../image/Rating-star-yellow.png')}></img> 4.7(23)</h5>
       </Col>
      <Col md={2}>
        <p className="text-left"><img src={require('../image/cuisinewhite.png')}></img>Litian</p>
       </Col></Row>
       <Row className="mt-3">
         <Col><img src={require("../image/pin-white.png")}></img> 675, Maude Ave,CA, Italian, Greek</Col>
       </Row>
       <Row className="my-1">
         <Col><img src={require("../image/time-waiting-icon.png")}></img> Delivery: 30-35 mins</Col>
       </Row>
       <Row className="my-1">
         <Col><img src={require("../image/clock.png")}></img> Monday:6:30-4:00pm</Col>
       </Row>
       </div>
       <Row className="w-100 align-items-center">
         <Col md={1}>
         <a href="" className="yellow-link"> More Info</a>
         </Col>
         <Col md={2}> <p className="dotted-btn m-0">Delivery Fees:$3.50</p></Col>
         <Col md="9">
          <div className="offer-circle">
            <p>Get</p>
            <h3>4%</h3>
            <p>Cashback</p>
          </div>
         </Col>
       </Row>
     </div>

      </div>

      <Row>
        <Col md={12}>
      <Nav tabs>
      <NavItem>
      <Dropdown isOpen={dropdownOpen} toggle={dropdowntoggle}>
     <DropdownToggle caret>
     All Day Menu
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
         <NavLink
           className={classnames({ active: activeTab === '1' })}
           onClick={() => { toggle('1'); }}
         >
           Top Rated
         </NavLink>
       </NavItem>
       { menu.map( ( menu) =>{
       return  ( <NavItem>
         <NavLink
           className={classnames({ active: activeTab === menu.tab_value })}
           onClick={() => { toggle(menu.tab_value); }}
         >
         {menu.dish_type}
         </NavLink></NavItem>)})
         }
        
         
         
      
     </Nav></Col>
     </Row>
     <TabContent activeTab={activeTab} className="w-100">
       <TabPane tabId="1">
         <Row>
           <Col sm="12">
             <h2 className="tab-heading">Popular Items</h2>
           </Col>
         </Row>
          <Row> 
            {newdata}
        {/* <Col md={3}>
       <Card  >
       <CardImg top width="100%" src={require('../image/listdishes.png')} alt="Card image cap" />
        <div className="reviews">
          <img src={require('../image/heart.png')}></img>
        </div>
       <CardBody>
         <CardTitle> Arkansas Fried Pickles </CardTitle>
         <CardSubtitle> <img src={require("../image/star.png")}></img> 4 <span>(23)</span></CardSubtitle>
       
        <div className="d-flex footer-card">
          <img src={require('../image/review.png')}></img>
          <h3 className="orange-price">  $84.3 </h3>
        </div>
       </CardBody>
     </Card>
     </Col>
     <Col md={3}>
       <Card  >
       <CardImg top width="100%" src={require('../image/listdishes1.png')} alt="Card image cap" />
        <div className="reviews">
          <img src={require('../image/heart.png')}></img>
        </div>
       <CardBody>
         <CardTitle> Arkansas Fried Pickles </CardTitle>
         <CardSubtitle> <img src={require("../image/star.png")}></img> 4 <span>(23)</span></CardSubtitle>
       
        <div className="d-flex footer-card">
          <img src={require('../image/review.png')}></img>
          <h3 className="orange-price">  $84.3 </h3>
        </div>
       </CardBody>
     </Card>
     </Col>
     <Col md={3}>
       <Card  >
       <CardImg top width="100%" src={require('../image/listdishes3.jpg')} alt="Card image cap" />
        <div className="reviews">
          <img src={require('../image/heart.png')}></img>
        </div>
       <CardBody>
         <CardTitle> Arkansas Fried Pickles </CardTitle>
         <CardSubtitle> <img src={require("../image/star.png")}></img> 4 <span>(23)</span></CardSubtitle>
       
        <div className="d-flex footer-card">
          <img src={require('../image/review.png')}></img>
          <h3 className="orange-price">  $84.3 </h3>
        </div>
       </CardBody>
     </Card>
     </Col>
     <Col md={3}>
       <Card  >
       <CardImg top width="100%" src={require('../image/listdishes4.jpg')} alt="Card image cap" />
        <div className="reviews">
          <img src={require('../image/heart.png')}></img>
        </div>
       <CardBody>
         <CardTitle> Arkansas Fried Pickles </CardTitle>
         <CardSubtitle> <img src={require("../image/star.png")}></img> 4 <span>(23)</span></CardSubtitle>
       
        <div className="d-flex footer-card">
          <img src={require('../image/review.png')}></img>
          <h3 className="orange-price">  $84.3 </h3>
        </div>
       </CardBody>
     </Card>
     </Col>
     <Col md={3}>
       <Card  >
       <CardImg top width="100%" src={require('../image/listdishes5.jpg')} alt="Card image cap" />
        <div className="reviews">
          <img src={require('../image/heart.png')}></img>
        </div>
       <CardBody>
         <CardTitle> Arkansas Fried Pickles </CardTitle>
         <CardSubtitle> <img src={require("../image/star.png")}></img> 4 <span>(23)</span></CardSubtitle>
       
        <div className="d-flex footer-card">
          <img src={require('../image/review.png')}></img>
          <h3 className="orange-price">  $84.3 </h3>
        </div>
       </CardBody>
     </Card>
     </Col>
     <Col md={3}>
       <Card  >
       <CardImg top width="100%" src={require('../image/listdishes7.jpg')} alt="Card image cap" />
        <div className="reviews">
          <img src={require('../image/heart.png')}></img>
        </div>
       <CardBody>
         <CardTitle> Arkansas Fried Pickles </CardTitle>
         <CardSubtitle> <img src={require("../image/star.png")}></img> 4 <span>(23)</span></CardSubtitle>
       
        <div className="d-flex footer-card">
          <img src={require('../image/review.png')}></img>
          <h3 className="orange-price">  $84.3 </h3>
        </div>
       </CardBody>
     </Card>
     </Col>
     <Col md={3}>
       <Card  >
       <CardImg top width="100%" src={require('../image/listdishes6.jpg')} alt="Card image cap" />
        <div className="reviews">
          <img src={require('../image/heart.png')}></img>
        </div>
       <CardBody>
         <CardTitle> Arkansas Fried Pickles </CardTitle>
         <CardSubtitle> <img src={require("../image/star.png")}></img> 4 <span>(23)</span></CardSubtitle>
       
        <div className="d-flex footer-card">
          <img src={require('../image/review.png')}></img>
          <h3 className="orange-price">  $84.3 </h3>
        </div>
       </CardBody>
     </Card>
     </Col>
     <Col md={3}>
       <Card  >
       <CardImg top width="100%" src={require('../image/listdishes9.jpg')} alt="Card image cap" />
        <div className="reviews">
          <img src={require('../image/heart.png')}></img>
        </div>
       <CardBody>
         <CardTitle> Arkansas Fried Pickles </CardTitle>
         <CardSubtitle> <img src={require("../image/star.png")}></img> 4 <span>(23)</span></CardSubtitle>
       
        <div className="d-flex footer-card">
          <img src={require('../image/review.png')}></img>
          <h3 className="orange-price">  $84.3 </h3>
        </div>
       </CardBody>
     </Card>
     </Col> */}
     </Row>
       </TabPane>
       <TabPane tabId="2">
         <Row>
           <Col sm="6">
             <Card body>
               <CardTitle>Special Title Treatment</CardTitle>
               <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
               <Button>Go somewhere</Button>
             </Card>
           </Col>
           <Col sm="6">
             <Card body>
               <CardTitle>Special Title Treatment</CardTitle>
               <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
               <Button>Go somewhere</Button>
             </Card>
           </Col>
         </Row>
       </TabPane>
     </TabContent>
     
     </Container>
    )
            }
export default Main;            