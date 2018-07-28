import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./redux/Store";
// import AddProduct from "./components/AddProduct";
import Home from "./Home";
// import ProductDisplay from "./components/ProductDisplay";
// import SearchPage from "./components/searchPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Provider store={Store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        {/* <Route path="/addproduct" component={AddProduct} />
        <Route path="/search" component={SearchPage} />
        <Route path="/productdisplay" component={ProductDisplay} /> */}
      </div>
    </Router>
  </Provider>
);

export default App;
