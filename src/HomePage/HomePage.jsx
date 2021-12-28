import React from "react";
import "../HomePage/HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus, faPlus,} from "@fortawesome/free-solid-svg-icons";
import {galleryCode} from "./Home";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      pullOutMenu: false,
      modalPop: false,
      shoppingCart: [],
      cartCount: 0,
    };
  }

  navPullout = () => {
    const { pullOutMenu } = this.state;
    pullOutMenu
      ? this.setState({ pullOutMenu: false })
      : this.setState({ pullOutMenu: true });
  };

  modalPopout = () => {
    this.setState({ modalPopout: true })
  }

  modalClose = () => {
      this.setState({ modalPopout: false })
  }

  addingToCart = (items) =>{
    this.setState((state) => (
      {shoppingCart:[...state.shoppingCart, items ],   
       cartCount: state.shoppingCart.length + 1,
      
      }))
    
  }

  render() {
    const { pullOutMenu, modalPopout} = this.state;

    return (
      <div>
        <nav className="nav-container">
          <div onClick={this.navPullout} className={pullOutMenu ? "hamburger change" : "hamburger"}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <ul className={ pullOutMenu ? "pullOutMenu menu-animation" : "pullOutMenu"} >
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Sign-in/Create Account</a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
            <ul className="filter">
              <p>Filter</p>
              <li>
                <label name="js">JS</label>
                <input type="checkbox" name="js" id="" />
              </li>
              <li>
                <label name="css">CSS</label>
                <input type="checkbox" name="css" id="" />
              </li>
              <li>
                <label name="html">HTML</label>
                <input type="checkbox" name="html" id="" />
              </li>
            </ul>
          </ul>
          <div className="cart">
            <span href="">
              <FontAwesomeIcon
                style={{
                  cursor: 'pointer',
                  position: "absolute",
                  bottom: "31%",
                  right: "12px",
                  fontSize: "40px",
                  zIndex: '10'
                }}
                icon={faCartPlus}
              />
              <span className="cartCount">{this.state.cartCount}</span>
            </span>
          </div>
        </nav>
        {/* modal */}
        <div className={pullOutMenu ? "hide" : null }>
            
          <div className="galleryContainer">
              {galleryCode.map((item, i) => (
                <div>
                  <div className="modalCardContainer">
                  <div onClick={this.modalPopout} className="cardContainer">
                    <span className="title">{item.name}</span>
                    <span className="price">{item.price}$</span>
                    <p className="description">{item.desc}</p>
                  </div>
    
                  <div onClick={this.modalClose} className={modalPopout ? 'modalBody modalOpen' : 'modalBody '}>
                    <div className="modal">
                      <span onClick={this.modalClose} className="modalClose">&times;</span>
                      <h2>{item.desc}</h2>
                      <div className="imgContainer">
                        <img src={process.env.PUBLIC_URL + item.img} />
                      </div>
                    </div>
                  </div>
                    <button onClick={() => {this.addingToCart([item.price, item.name, item.id, item.desc])}}><FontAwesomeIcon icon={faPlus}/></button>
                </div> 
                </div>
              ))
                
                }
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
