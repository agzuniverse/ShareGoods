import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class PoolDiv extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { image, category } = this.props;

    return (
      <div className="ProductDiv">
        <MuiThemeProvider>
          <div className="imgDiv">
            <img src={image} id="productImg" alt="" />
          </div>
          <Link
            to={{ pathname: "/pooldisplay", state: {image:image, category: category }}}
            style={{ textDecoration: "none" }}
          >
            <div className="infoDiv">
              <span id="category">{category}</span>
              <br />
              <span>Rent a pool of items required for this category</span>
              {/* <span id="price">Rs {price}</span> */}
              <br />
            </div>
          </Link>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default PoolDiv;
