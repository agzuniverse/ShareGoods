import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import GetAuthDetails from "./GetAuthDetails";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import PaymentSheet from './PaymentSheet';

class ProductDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hidden: true,
        PaymentSheetVisibility: false,
        imageurl: "http://www.kmart.com.au/wcsstore/Kmart/images/ncatalog/f/6/42509196-1-f.jpg",
        title: "Blue tent",
        category: "Adventure",
        price: "399",
        username: "John Doe",
        contact: "1234567890",
        email: "johndoe@example.com",
        duration: "5 days",
    };
  }

  toggleSellerInfoHidden = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  showPaymentSheet = () => {
      this.setState({PaymentSheetVisibility: true});
  }

  render() {
    // const {
    //   imageurl,
    //   title,
    //   category,
    //   price,
    //   username,
    //   contact,
    //   email
    // } = this.props.location.state;

    const {
        imageurl,
        title,
        category,
        price,
        username,
        contact,
        email,
        duration
      } = this.state;

    return (
    <MuiThemeProvider>
      <div className="mainBackground sellWrapper">
        {/* {this.props.location.state ? ( */}
          <div>
            <div className="appbar">
              <a href="/" className="logo">
                Title goes here
              </a>
              {!this.props.uid ? (
                <Link to="/login">
                  <button id="logoutAppBar">Login</button>
                </Link>
              ) : (
                <Link to="/user">
                  <button id="logoutAppBar">Profile</button>
                </Link>
              )}
            </div>

            <div id="centerTotal">
              <div className="imageHolder">
                <img id="textbook" src={imageurl} alt="Fetching error" />
              </div>

              <div className="detailCard">
                <div id="textName">{title}</div>
                <div id="category">Category: {category}</div>
                <div id="amount">
                  <span id="priceTag">Price</span>: Rs {price}
                </div>
                <div className="details">
                  Description goes here
                </div>
                <br/><br/>
                <div className="details">
                  Duration: {duration}
                </div><br/><br/>
                <div className="sellerButtons">
                    <RaisedButton label="Seller info" backgroundColor="lawngreen" onClick={()=>{this.toggleSellerInfoHidden()}}/>
                    <RaisedButton label="Rent now" backgroundColor="lawngreen" onClick={()=>{this.showPaymentSheet()}}/>
                </div>
              </div>
              {!this.state.hidden ? (
            <div id="sellerInfoCard">
                <h2>Seller Info</h2>
                <ul>
                <li>
                    Name: <span>{username}</span>
                </li>
                <li>
                    Semester: <span>4</span>
                </li>
                <li>
                    Branch: <span>Computer Science</span>
                </li>
                <li>
                    Mobile No: <span>{contact}</span>
                </li>
                <li>
                    Email:
                    <span>{email}</span>
                </li>
                <RaisedButton label="Done" backgroundColor="skyblue" onClick={()=>{this.toggleSellerInfoHidden()}}/>
                </ul>
              </div> ) : (
                  null
              )}
            </div>
          </div>
        {/* ) : (
          <h1 style={{ color: "white" }}>403 Forbidden</h1>
        )} */}
      </div>
      <PaymentSheet visible={this.state.PaymentSheetVisibility} />
      </MuiThemeProvider>
    );
  }
}

ProductDisplay.propTypes = {
  uid: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  uid: state.auth.uid
});

export default connect(mapStateToProps)(ProductDisplay);
