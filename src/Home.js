import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Auth from "./Auth";
import { searchString } from "./redux/ActionCreators";
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import LoginForm from "./LoginForm";
import RaisedButton from 'material-ui/RaisedButton';
// import GetAuthDetails from "./GetAuthDetails";

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      LoginVisibility: false,
    };
  }
  
  search = () => {
    const query = document.getElementById("input").value;
    this.props.updateSearchString(query);
    this.props.history.push("/search");
  };

  
  showLogin = () => {
    this.setState({LoginVisibility: true});
  }

  closeLogin = () => {
    this.setState({LoginVisibility: false});
  }

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
      <div class="backGrnd">
        <MuiThemeProvider>
          <div className="Container">
            <div className="topWrapper">
              <div id="button">
              <span>
                Kochi
              </span>
              </div>
              <center>
                <h1 id="head">
                  Share<span class="green">Goods</span>
                </h1>
              </center>
              <div id="homeScreenButtons">
                <button  class="buttonWithBorder" onClick={()=>{}}>Travel </button>
                <button  class="buttonWithBorder" onClick={()=>{}}>Construction</button>
                <button class="buttonWithBorder" onClick={()=>{}}>Gardening</button>
                <button class="buttonWithBorder" onClick={()=>{}}>Maintenance</button>
              </div>
              <form onSubmit={this.search}>
                <input id="input" type="text" placeholder="Search for anything" />
              </form>
              <div id="tagLine">
                Peer to Peer rental platform that delivers to <br/>your doorstep
              </div>
            </div>
          </div>
        </MuiThemeProvider>
        <LoginForm visible={this.state.LoginVisibility} closer={this.closeLogin}/>
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
