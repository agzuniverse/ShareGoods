import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import GetAuthDetails from "./GetAuthDetails";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import PaymentSheet from './PaymentSheet';
import TextField from 'material-ui/TextField';

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
        warranty:false,
        weartear:true,
        additionalInfo: "Lorem ipsum"

    };
  }

  toggleSellerInfoHidden = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  showPaymentSheet = () => {
      this.setState({PaymentSheetVisibility: true});
  }

  closePayment = () => {
    this.setState({PaymentSheetVisibility: false});
  }

  render() {
    const {
      image,
      title,
      category,
      price,
      max_duration,
      description,
      active
    } = this.props.location.state;

    // const {
    //     imageurl,
    //     title,
    //     category,
    //     price,
    //     username,
    //     contact,
    //     email,
    //     duration,
    //     warranty,
    //     weartear,
    //     additionalInfo
    //   } = this.state;

    return (
    <MuiThemeProvider>
      <div className="mainBackground sellWrapper ">
        {this.props.location.state ? (
          <div>
            <div className="appbar">
              <a href="/" className="logo">
                <span id="share">Share</span><span id="watchPart">Goods</span>
              </a>
            </div>

            <div id="centerTotal productDisplayDiv">

              <div className="imageHolder">
                <img id="productItemDisplay" src={image} alt="Fetching error" />
              </div>

              <div className="detailCard">
                <h2>{title}</h2>
                <div id="category">Category: {category}</div>
                <div id="amount">
                  <span id="priceTag">Price</span>: Rs {price} per day
                </div>
                <div className="availability">
                  Availability: {active ? 'Available' : 'Not available'}
                </div>
                <br/><br/>
                <div className="details">
                  Duration: {max_duration}
                </div><br/><br/>
                <div className="sellerButtons">
                    <RaisedButton label="Rent now" backgroundColor="lawngreen" onClick={()=>{this.showPaymentSheet()}}/>
                </div>
              </div>

              <br/>
              <div style={{height: '100px'}} />
              <hr className="ruler" />
              <br />

              <div style={{color: 'rgba(0,0,0,0.87)', flexDirection: 'column', width: '80%', marginLeft: '150px'}}>
                    {/* <h2>Owner: {username}</h2> */}
                    <br/>
                    <p>{description}</p>
                    <br/>
                    {/* <p>Is warranty applicable? {warranty? 'Yes' : 'No'} </p>
                    <p>Is there wear and tear? {weartear? 'Yes' : 'No'} </p>
                    <p>Is warranty applicable? {warranty? 'Yes' : 'No'} </p> */}
                    <TextField
                      style={{ width: "65%" }}
                      floatingLabelText="Do you have a question?"
                      multiLine={true}
                      rows={2}
                    />
                    <br />
                    <br /><br/><br/>
              </div>

            </div>
          </div>
        ) : (
          <h1 style={{ color: "white" }}>403 Forbidden</h1>
        )}
      </div>
      <PaymentSheet visible={this.state.PaymentSheetVisibility} price={price} closer={this.closePayment}/>
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
