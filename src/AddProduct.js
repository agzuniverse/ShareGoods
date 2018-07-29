import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import { connect } from "react-redux";
// import GetAuthDetails from "./GetAuthDetails";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import Checkbox from "material-ui/Checkbox";
import Dialog from "material-ui/Dialog";
import CircularProgress from "material-ui/CircularProgress";
import DatePicker from "material-ui/DatePicker";
import axios from 'axios';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      invalid: [],
      uploading: false,
      category: 'Choose category',
      subcategory: 'Choose subcategory'
    };
  }

  setInvalid = field => {
    const { invalid } = this.state;
    invalid.push(field);
    this.setState({ invalid });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  goToUserPage = () => {
    this.props.history.push("/user");
  };

  catChange = (event, index, value) => {
    this.setState({
      category: value
    });
  };

  subCatChange = (event, index, value) => {
    this.setState({
      subcategory: value
    });
  };

  handeSubmit = () => {
      const title = document.getElementById("itemTitle").value;
      const price = document.getElementById("itemPrice").value;
      const year = document.getElementById("yearOfPurchase").value;
      const desc = document.getElementById("itemDescription").value;
      const { category } = this.state;
      const file = document.getElementById("fileUpload").files[0]; 
      let reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = (e) => {
      //   document.getElementById("uploadFrame").src = e.target.result;
      // }
      this.state.invalid = [];

      if (!this.state.invalid.length === 0) {
        console.log("Form field error");
        this.handleOpen();
      } else {
        const data = {
          Title: title,
          Price: price,
          Description: desc,
          uid: this.props.uid,
          year,
          Active: true,
          Category: this.state.category,
        };
        console.log(data);
        document.getElementById("itemTitle").value = "";
        document.getElementById("itemPrice").value = "";
        document.getElementById("yearOfPurchase").value = "";
        document.getElementById("itemDescription").value = "";
        this.setState({
          uploading: true
        });
        // fetch('/api/products/', {
        //   method: 'POST',
        //   body: JSON.stringify(data),
        //   headers:{
        //     'Content-Type': 'application/json'
        //   }
        // });
        axios.post('/api/products', data)
    }
  };

  render() {
    
    const minValue =150;
    const maxValue=230;

    const actions = [
      <FlatButton
        label="Ok"
        primary
        keyboardFocused
        onClick={this.handleClose}
      />
    ];

      return (
        <div className="mainBackground-addProductPage sellWrapper">
          <MuiThemeProvider>
            <div className="appbar">
              <a href="/" className="logo">
                <span id="share">Share</span><span id="watchPart">Goods</span>
              </a>
            </div>
            {!this.state.uploading ? (
              <div className="centerTotal">
                <p className="info">
                  <em>
                    Please fill in the information carefully without errors or
                    spelling mistakes. All fields are required.
                  </em>
                </p>
                <TextField
                  style={{ width: "65%" }}
                  id="itemTitle"
                  floatingLabelText="Enter item name"
                />
                <DropDownMenu
                  onChange={this.catChange}
                  style={{ width: "65%" }}
                  value={this.state.category}
                  autoWidth={false}
                  className="dropDownMenu"
                >
                  <MenuItem value="Travel" primaryText="Adventure" />
                  <MenuItem value="Tools" primaryText="Tools" />
                  <MenuItem value="Gardening" primaryText="Gardening" />
                  <MenuItem value="Maintenance" primaryText="Maintenance" />
                  <MenuItem value="Choose category" primaryText="Choose category" />
                </DropDownMenu>
                <br />
                <img src="#" id="uploadFrame" />
                <br />
                <RaisedButton
                  label="Choose Image"
                  labelPosition="before"
                  containerElement="label"
                >
                  <input
                    id="fileUpload"
                    type="file"
                    accept="image/*"
                    className="hiddenFileInput"
                  />
                </RaisedButton>
                <br/>
                <hr className="ruler"/>
                <br />
                
                <p className="info">
                  <em>
                    Please fill in the information carefully without errors or
                    spelling mistakes. All fields are required.
                  </em>
                </p>
                <TextField
                  style={{ width: "65%" }}
                  id="yearOfPurchase"
                  floatingLabelText="Enter year of purchase"
                />
                <br />
                <div class="justAlign">
                  <Checkbox label="No wear and tear" />
                  <Checkbox label="Is warranty applicable to this item?" />    
                </div>
                <TextField
                  style={{ width: "65%" }}
                  id="itemDescription"
                  floatingLabelText="Additional information"
                  multiLine={true}
                  rows={5}
                />
                <br />
                <hr className="ruler" />
                <br />

                <TextField
                  style={{ width: "65%" }}
                  id="itemPrice"
                  floatingLabelText="Enter price per day of rent"
                />
                <p className="info">
                  <em>
                    Products in this sub-category are in the range of {minValue} and {maxValue}.
                  </em>
                </p>
                <TextField
                  style={{ width: "65%" }}
                  id="rentDuration"
                  floatingLabelText="Enter maximum duration of renting allowed (In days)"
                />
                <br />
                <hr className="ruler" />
                <br />

                <div style={{ height: "5vh" }} />
                <RaisedButton
                  onClick={() => this.handeSubmit()}
                  label="Rent this item"
                  primary
                />
                <br />
                <br />
              </div>
            ) : (
              <div id="loading">
                <MuiThemeProvider>
                  <CircularProgress size={200} thickness={9} />
                  <h2 style={{ color: "white" }}> Uploading, please wait. </h2>
                </MuiThemeProvider>
              </div>
            )}
          </MuiThemeProvider>
        </div>
      );
  }
}

AddProduct.propTypes = {
  uid: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  uid: state.auth.uid,
  email: state.auth.email,
  name: state.auth.name
});

export default connect(mapStateToProps)(AddProduct);
