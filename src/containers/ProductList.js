import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";

class ProductList extends Component {
  render() {
    console.log(this.props);
    const { filter } = this.props;

    let productList = this.props[filter].map((product, index) => {
      return <Product key={index} product={product} />;
    });

    return <ul className="ProductList">{productList}</ul>;
  }
}

const mapStateToProps = function(state, filter) {
  return {
    underTwenty: state.products.filter(item => item.price < 20),
    overTwenty: state.products.filter(item => item.price >= 20),
    all: state.products,
    filter: state.filter
  };
};

export default connect(mapStateToProps)(ProductList);
