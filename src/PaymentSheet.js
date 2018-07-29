import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import { DateRange } from 'react-date-range';
import moment from 'moment';
import Dialog from 'material-ui/Dialog';

class PaymentSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
        days: 0,
        open: false,
    };
  }

  handleSelectRange = (range) => {
      this.setState({
          days: moment(range.endDate).diff(moment(range.startDate),'days')
      });
  }

  handleClose = () => {
      this.setState({
          open:false
      });
  }

  handleOpen = () => {
      this.setState({
          open:true
      });
  }


  render() {
    // const { imageurl, title, category, price } = this.props.details;
    const { visible, price, closer } = this.props;
    const totalPrice = price * this.state.days;
    const contact_address = 'Aswathy Nivas, Nettoor (P.O), Ernakulam, 682020';
    const contact_number = '8089967292'
    const actions = [
        <FlatButton
          label="OK"
          primary={true}
          onClick={this.handleClose}
        />,
      ];

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
                        <RaisedButton label="Proceed to payment" primary={true} onClick={this.handleOpen} />
                    </div>
                </MuiThemeProvider>
            </div> ):
             null}
               <Dialog
                title="Payment confirmed"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                >
                The owner has been contacted, you will be informed after he accepts your request.<br/>
                The delivery time will be assigned to you shortly.
                </Dialog>
        </div>
    );
  }
}

export default PaymentSheet;
