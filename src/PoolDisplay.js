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
    const { image1, image2, image3 } = {
      image1: 'https://www.dhresource.com/webp/m/0x0s/f2-albu-g2-M01-2D-70-rBVaGlacmxCAPJknAAE0XwTzzk4811.jpg/hot-sale-3-4-person-stay-cord-automatic-camping.jpg',
      image2: 'https://s3.amazonaws.com/DOWS_products/1000x1000/sports_outdoors/survival_kits/new-superior-kit.jpg',
      image3: 'https://m.media-amazon.com/images/S/aplus-media/mg/aea417b7-24d7-46b4-8639-a4a8999440fa._SL300__.jpg',
    };
    const price = 400;
    const category = 'Travel';

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
          <div>
            <div className="appbar">
              <a href="/" className="logo">
                <span id="share">Share</span><span id="watchPart">Goods</span>
              </a>
            </div>

            <div id="centerTotal productDisplayDiv">
              <div style={{display:'flex', flexDirection:'row', height: '30vh', marginTop: '50px', justifyContent:'space-around', width:'100vw',}}>
                <div><img id="productItemDisplay" src={image1} alt="Fetching error" /><p style={{textAlign:'center', width:'100%'}}>Tent</p></div>
                <h1 style={{fontSize: '72px'}}>+</h1>
                <div><img id="productItemDisplay" src={image2} alt="Fetching error" /><p style={{textAlign:'center', width:'100%'}}>Hiking kit</p></div>
                <h1 style={{fontSize: '72px'}}>+</h1>
                <div><img id="productItemDisplay" src={image3} alt="Fetching error" /><p style={{textAlign:'center', width:'100%'}}>GoPro</p></div>
              </div>
              

            <div className="sellerButtons centerTotal" style={{marginLeft: '300px'}}>
                    
            </div>
            
              <div style={{padding: '50px'}}>
                <h2>Recommended pool for {category}</h2>
                <div id="amount">
                  <span id="priceTag">Pool price</span>: Rs {price} per day
                  &nbsp;&nbsp;&nbsp;
                  <RaisedButton label="Rent now" backgroundColor="lawngreen" onClick={()=>{this.showPaymentSheet()}}/>
                </div><br/>
              </div>

              <br/>
              <div style={{height: '100px'}} />
              <hr className="ruler" />
              <br />

            </div>
          </div>
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
