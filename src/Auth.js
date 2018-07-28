import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import {
  setGlobalUid,
  setGlobalEmail,
  setGlobalName,
  testRedux
} from "./redux/ActionCreators";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import GetAuthDetails from "./GetAuthDetails";

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: "",
      userName: "",
      userProPic: "",
      userEmail: ""
    };
  }

  componentWillMount() {
    // auth.onAuthStateChanged(user => {
    //   if (user) {
    //     console.log("already logged in");
    //   } else {
    //     console.log("No user logged in");
    //   }
    // });
    this.props.testRedux("WORKS");
  }

  logout = () => {
    // auth.signOut().then(() => {
    //   this.setState({
    //     uid: "",
    //     userEmail: "",
    //     userName: "",
    //     userProPic: ""
    //   });
    //   localStorage.removeItem("LOCAL_UID");
    //   localStorage.removeItem("LOCAL_NAME");
    //   localStorage.removeItem("LOCAL_EMAIL");
    //   localStorage.removeItem("LOCAL_PROPIC");
    //   this.props.updateUid("");
    //   this.props.updateName("");
    //   this.props.updateEmail("");
    //   this.props.updatePropic("");
    //   console.log("Logout Successful");
    //   this.props.navigateOnAuthChange("homepage");
    // });
  };

  login = () => {
    // auth.signInWithPopup(provider).then(result => {
    //   const pData = result.user.providerData[0];
    //   console.log(result);
    //   // Check if user is a new user
    //   // const isNewUser = result.additionalUserInfo.isNewUser;
    //   this.setState(
    //     {
    //       uid: pData.uid,
    //       userEmail: pData.email,
    //       userName: pData.displayName,
    //       userProPic: pData.photoURL
    //     },
    //     () => {
    //       this.props.updateUid(this.state.uid);
    //       this.props.updateName(this.state.userName);
    //       this.props.updateEmail(this.state.userEmail);
    //       this.props.updatePropic(this.state.userProPic);
    //       localStorage.setItem("LOCAL_UID", this.state.uid);
    //       localStorage.setItem("LOCAL_NAME", this.state.userName);
    //       localStorage.setItem("LOCAL_EMAIL", this.state.userEmail);
    //       localStorage.setItem("LOCAL_PROPIC", this.state.userProPic);
    //       this.props.navigateOnAuthChange("userpage");
    //     }
    //   );
    //   console.log("User has logged in");
    // });
  };

  render() {
    return (
        <MuiThemeProvider>
            <span>
                {!this.props.uid ? (
                <div>
                    <RaisedButton label="LOGIN" primary={true} style={{}} />
                </div>
                ) : (
                <button id="logout" onClick={this.logout}>
                    Logout
                </button>
                )}
            </span>
      </MuiThemeProvider>
    );
  }
}

Auth.propTypes = {
  uid: PropTypes.string,
  updateUid: PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updateName: PropTypes.func.isRequired,
  testRedux: PropTypes.func.isRequired,
  navigateOnAuthChange: PropTypes.func.isRequired
};

Auth.defaultProps = {
  uid: ""
};

const mapStateToProps = state => ({
  uid: state.auth.uid
});

const mapDispatchToProps = dispatch => ({
  updateUid: uid => {
    dispatch(setGlobalUid(uid));
  },
  updateEmail: email => {
    dispatch(setGlobalEmail(email));
  },
  updateName: name => {
    dispatch(setGlobalName(name));
  },
  testRedux: text => {
    dispatch(testRedux(text));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
