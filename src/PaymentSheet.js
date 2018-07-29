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
    this.state = {
        days: 0,
    };
  }

  handleSelectRange = (range) => {
      this.setState({
          days: moment(range.endDate).diff(moment(range.startDate),'days')
      });
  }

  render() {
    // const { imageurl, title, category, price } = this.props.details;
    const { visible, price, closer } = this.props;
    const totalPrice = price * this.state.days;
    const contact_address = 'Aswathy Nivas, Nettoor (P.O), Ernakulam, 682020';
    const contact_number = '8089967292'

    return (
        <div onClick={closer}>
            {visible ? (
            <div className="actionSheet">
                <MuiThemeProvider>
                    <div className="actionSheetContent" onClick={(e) => {e.stopPropagation()}}>
                        <h2> Confirm rent </h2>
                        <DateRange
                            onInit={this.handleSelectRange}
                            onChange={this.handleSelectRange}
                        />
                        <h3>Total price: {totalPrice} </h3>
                        <p>Address: {contact_address}</p>
                        <p>Contact: {contact_number}</p>
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
