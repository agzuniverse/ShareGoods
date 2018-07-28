import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Auth from "./Auth";
import { searchString } from "./redux/ActionCreators";
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import GetAuthDetails from "./GetAuthDetails";

class Home extends Component {
  
  search = () => {
    const query = document.getElementById("input").value;
    this.props.updateSearchString(query);
    this.props.history.push("/search");
  };

  navigateOnAuthChange = path => {
    switch (path) {
      case "userpage":
        this.props.history.push("/user");
        break;
      case "homepage":
        this.props.history.push("/");
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="Container">
            <div className="topWrapper">
              <span id="button">
                <Auth navigateOnAuthChange={this.navigateOnAuthChange} />
              </span>
              <center>
                <h1 id="head">
                  ShareGoods
                </h1>
              </center>
              <div id="homeScreenButtons">
                <button  class="buttonWithBorder" onClick={()=>{}}>Adventure </button>
                <button  class="buttonWithBorder" onClick={()=>{}}>Construction</button>
                <button class="buttonWithBorder" onClick={()=>{}}>test</button>
                <button class="buttonWithBorder" onClick={()=>{}}>test</button>
              </div>
              <form onSubmit={this.search}>
                <i class="material-icons">search</i>
                <input id="input" type="text" placeholder="Search for anything" />
              </form>
              <div id="tagLine">
                Rent stuff
              </div>
              <div id="bottom">
                  <span>FOOTER GOES HERE</span>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

Home.propTypes = {
  updateSearchString: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
const mapDispatchToProps = dispatch => ({
  updateSearchString: query => {
    dispatch(searchString(query));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
