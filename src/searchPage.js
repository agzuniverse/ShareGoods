import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import { connect } from "react-redux";
import SideMenu from "./SideMenu";
import ProductDiv from "./ProductDiv";
import Searchbar from "./Searchbar";
import CircularProgress from "material-ui/CircularProgress";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      loaded: false
    };
  }

  componentWillMount() {
    if (this.props.query !== null) {
    //   this.performSearch(this.props.query);
    }
  }

  search = e => {
    e.preventDefault();
    const query = document.getElementById("input2").value;
  };

  render() {
    const { searchResults, loaded } = this.state;
    // const { semFilter, branchFilter } = this.props;

    // const books = Object.keys(searchResults).map(key => {
    //   if (
    //     semFilter === "Any semester" &&
    //     branchFilter === "Any branch"
    //   )
    //     return <ProductDiv details={searchResults[key]} />;
    //   else if (
    //     semFilter !== "Any semester" &&
    //     branchFilter === "Any branch"
    //   ) {
    //     if (searchResults[key].semester === semFilter)
    //       return <ProductDiv details={searchResults[key]} />;
    //   } else if (
    //     semFilter === "Any semester" &&
    //     branchFilter !== "Any branch"
    //   ) {
    //     if (searchResults[key].branch === branchFilter)
    //       return <ProductDiv details={searchResults[key]} />;
    //   } else if (
    //     searchResults[key].branch === branchFilter &&
    //     searchResults[key].semester === semFilter
    //   )
    //     return <ProductDiv details={searchResults[key]} />;
    //   return null;
    // });
    return (
      <div className="App">
        <SideMenu isFilter />
        <div className="mainDiv">
          <Searchbar search={this.search} />
          <div id="productList">
            {loaded ? (
              null
            ) : (
              <div id="loading">
                <MuiThemeProvider>
                  <CircularProgress size={50} thickness={5} />
                </MuiThemeProvider>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  query: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  query: state.search.query,
});

export default connect(mapStateToProps)(SearchPage);
