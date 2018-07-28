import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import GetAuthDetails from "./GetAuthDetails";

class ProductDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hidden: true,
        imageurl: "http://www.kmart.com.au/wcsstore/Kmart/images/ncatalog/f/6/42509196-1-f.jpg",
        title: "Blue tent",
        category: "Adventure",
        price: "399",
        username: "John Doe",
        contact: "1234567890",
        email: "johndoe@example.com"
    };
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
        email
      } = this.state;

    return (
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
                <div id="category">{category}</div>
                <div id="amount">
                  <span id="priceTag">Price</span>: Rs {price}{" "}
                </div>
                <div id="details">
                  Description goes here
                </div>
                <button
                  type="submit"
                  id="sellerInfo"
                  onClick={() => this.toggleSellerInfoHidden()}
                >
                  Seller Info
                </button>
              </div>

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
                <button
                    type="submit"
                    onClick={() => {}}
                >
                    Done
                </button>
                </ul>
            </div>
            </div>
          </div>
        {/* ) : (
          <h1 style={{ color: "white" }}>403 Forbidden</h1>
        )} */}
      </div>
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
