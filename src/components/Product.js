import React, { Component } from "react";

class Product extends Component {
  render() {
    const { product } = this.props;
    console.log(product);

    return (
      <li key={product.listing_id}>
        <img src={product.image} alt={product.listing_id} />
        <h3>{product.title}</h3>
        <h4>{product.price}</h4>
      </li>
    );
  }
}

export default Product;
