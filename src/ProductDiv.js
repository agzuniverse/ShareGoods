import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class ProductDiv extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { image, title, category, price, description, max_duration } = this.props.details;

    return (
      <div className="ProductDiv">
        <MuiThemeProvider>
          <div className="imgDiv">
            <img src={image} id="productImg" alt="" />
          </div>
          <Link
            to={{ pathname: "/productdisplay", state: this.props.details }}
            properties={this.props.details}
            style={{ textDecoration: "none" }}
          >
            <div className="infoDiv">
              <span id="productName">{title}</span>
              <br />
              <span id="category">{category}</span>
              <br />
              <span id="price">Rs {price}</span>
              <br />
              <span id="price">Maximum rent duration is {max_duration} days</span>
              <br />
            </div>
          </Link>
        </MuiThemeProvider>
      </div>
    );
  }
}

ProductDiv.propTypes = {
  details: PropTypes.object.isRequired
};

ProductDiv.defaultProps = {
  details: {
    imageurl: "http://www.kmart.com.au/wcsstore/Kmart/images/ncatalog/f/6/42509196-1-f.jpg",
    title:  "Blue Tent",
    category: "Adventure",
    price: 399,
  }
};

export default ProductDiv;
