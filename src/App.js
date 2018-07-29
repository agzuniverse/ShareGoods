import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import AddProduct from "./AddProduct";
import Home from "./Home";
import ProductDisplay from "./ProductDisplay";
import SearchPage from "./searchPage";
import Userpage from "./Userpage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PoolDisplay from "./PoolDisplay";

const App = () => (
  <Provider store={Store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchPage} />
        <Route path="/addproduct" component={AddProduct} />
        <Route path="/productdisplay" component={ProductDisplay} />
        <Route path="/Userpage" component={Userpage} />
        <Route path="/pooldisplay" component={PoolDisplay} />
      </div>
    </Router>
  </Provider>
);

export default App;
