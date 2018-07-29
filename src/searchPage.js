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
       this.performSearch(this.props.query);
    }
  }

  performSearch = query => {
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then(response => response.json())
    // .then(json => console.log(json))
    fetch(`/api/products/search/?search=${query}`).then((res) => {
      console.log(res);
      return res.json();
    }).then((data) => {
      console.log(data);
      this.setState({
        searchResults: data,
        loaded: true
      });
    });
  }

  search = e => {
    e.preventDefault();
    const query = document.getElementById("input2").value;
    this.performSearch(query);
  };

  render() {
    const { searchResults, loaded } = this.state;
    const { catFilter, branchFilter } = this.props;

    const products = Object.keys(searchResults).map(key => {
      // if (
      //   catFilter === "Any category" &&
      //   branchFilter === "Any branch"
      // )
      //   return <ProductDiv details={searchResults[key]} />;
      // else if (
      //   catFilter !== "Any category" &&
      //   branchFilter === "Any branch"
      // ) {
      //   if (searchResults[key].category === catFilter)
      //     return <ProductDiv details={searchResults[key]} />;
      // } else if (
      //   catFilter === "Any category" &&
      //   branchFilter !== "Any branch"
      // ) {
      //   if (searchResults[key].branch === branchFilter)
      //     return <ProductDiv details={searchResults[key]} />;
      // } else if (
      //   searchResults[key].branch === branchFilter &&
      //   searchResults[key].category === catFilter
      // )
        return <ProductDiv details={searchResults[key]} />;
      // return null;
    });
    return (
      <div className="App">
        <SideMenu isFilter />
        <div className="mainDiv">
          <Searchbar search={this.search} />
          <div id="productList">
            {loaded ? (
              products
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
