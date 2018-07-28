import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import { DateRange } from 'react-date-range';
import moment from 'moment';

class PaymentSheet extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  handleSelectRange = (range) => {
    let days = moment(range.endDate).diff(moment(range.startDate),'days');
  }

  render() {
    // const { imageurl, title, category, price } = this.props.details;
    const { visible } = this.props;

    return (
        <div>
            {visible ? (
            <div className="actionSheet">
                <MuiThemeProvider>
                    <div className="actionSheetContent">
                        <h2> Confirm rent </h2>
                        <DateRange
                            onInit={this.handleSelectRange}
                            onChange={this.handleSelectRange}
                        /><br/><br/>
                        <RaisedButton label="Proceed to payment" primary={true}/>
                    </div>
                </MuiThemeProvider>
            </div> ):
             null}
        </div>
    );
  }
}

export default PaymentSheet;
