import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from 'material-ui/TextField';

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  login = () => {
      
  }

  render() {
    // const { imageurl, title, category, price } = this.props.details;
    const { visible, price, closer } = this.props;

    return (
        <div onClick={closer}>
            {visible ? (
            <div className="actionSheet">
                <MuiThemeProvider>
                    <div className="actionSheetContent" onClick={(e) => {e.stopPropagation()}}>
                        <TextField floatingLabelText="Username" />
                        <TextField floatingLabelText="Password" type='password' />
                        <RaisedButton label="Login" primary={true} onClick={this.login}/>
                    </div>
                </MuiThemeProvider>
            </div> ):
             null}
        </div>
    );
  }
}

export default LoginForm;
