import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PoolDiv from './PoolDiv';
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
      category,
      price,
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
                <h2>Recommended pool for {category}</h2>
                <div id="amount">
                  <span id="priceTag">Pool price</span>: Rs 180 per day
                </div><br/>
              </div>

              <br/>
              <div style={{height: '100px'}} />
              <hr className="ruler" />
              <br />

            </div>

            <div className="sellerButtons centerTotal" style={{marginLeft: '300px'}}>
                    <RaisedButton label="Rent now" backgroundColor="lawngreen" onClick={()=>{this.showPaymentSheet()}}/>
            </div>
          </div>
        ) : (
          <h1 style={{ color: "white" }}>403 Forbidden</h1>
        )}
      </div>
      <PaymentSheet visible={this.state.PaymentSheetVisibility} price={180} closer={this.closePayment}/>
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
