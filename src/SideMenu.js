import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { setCatFilter, setBranchFilter } from "../redux/ActionCreators";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import Auth from "./Auth";

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryValue: "Any category",
      branchValue: "Any branch"
    };
  }

  catChange = (event, index, value) => {
    this.setState({
      categoryValue: value
    });
    this.props.updateCatFilter(value);
  };

  branchChange = (event, index, value) => {
    this.setState({
      branchValue: value
    });
    this.props.updateBranchFilter(value);
  };

  render() {
    if (this.props.isFilter === true) {
      return (
        <div className="SideMenu mainBackground mainColor">
          <MuiThemeProvider>
            <Link to="/">
            <a href="#" className="logo">
              <span style={{color:'black'}}>Share</span><span id="watchPart">Goods</span>
            </a>
            </Link>
            <div className="filterDiv">
              Category<br />
              <DropDownMenu
                onChange={this.catChange}
                value={this.state.categoryValue}
                autoWidth={false}
                className="dropDownMenu"
              >
                <MenuItem value="Any category" primaryText="Any category" />
                <MenuItem value="Travel" primaryText="Travel" />
                <MenuItem value="Construction" primaryText="Construction" />
                <MenuItem value="Maintenance" primaryText="Maintenance" />
                <MenuItem value="Gardening" primaryText="Gardening" />
              </DropDownMenu>
              <br />
            </div>
            <div className="linksDiv">
              {this.props.uid !== "" && this.props.uid !== null ? (
                <Link to="/user">
                  <RaisedButton backgroundColor="lawngreen" fullWidth>
                   Give item for rent
                  </RaisedButton>
                </Link>
              ) : (
              <Link to='/addproduct'>
                <RaisedButton
                  backgroundColor="lawngreen"
                  fullWidth
                >
                  Give item for rent
                </RaisedButton>
              </Link>
              )}
            </div>
          </MuiThemeProvider>
        </div>
      );
    }
    return (
      <div className="SideMenu mainBackground mainColor">
        <MuiThemeProvider>
          <Link to="/">
            <a href="#" className="logo">
            <span style={{color:'black'}}>Share</span><span id="watchPart">Goods</span>
            </a>
          </Link>
          <div className="userInfoDiv">
            <br />
            <br />
            {/* {this.props.userDetails.name} */}
            <br />
            {/* {this.props.userDetails.email} */}
            <br />
            <br />
            <FlatButton label='My items' primary={true} fullWidth={true} />
            <FlatButton label="Items I've rented" primary={true} fullWidth={true} />
          </div>
          <br />
          <div className="linksDiv">
            <Link to="/addproduct">
              <RaisedButton backgroundColor="lawngreen" fullWidth>
                Add Item
              </RaisedButton>
              <br />
              <br />
            </Link>
            <Link to="/search">
              <RaisedButton backgroundColor="lightblue" fullWidth>
                Search for items
              </RaisedButton>
              <br />
              <br />
            </Link>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

SideMenu.propTypes = {
  isFilter: PropTypes.bool.isRequired,
  uid: PropTypes.string.isRequired,
  userDetails: PropTypes.object.isRequired,
  navigateOnAuthChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  uid: state.auth.uid,
});

const mapDispatchToProps = dispatch => ({
  updateCatFilter: cat => {
    // dispatch(setCatFilter(cat));
  },
  updateBranchFilter: branch => {
    // dispatch(setBranchFilter(branch));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
