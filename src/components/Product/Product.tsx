'use client';
import React from 'react';


export const Product = props => {
  const { product } = props;

  console.log('mProduct ', product)

  if (product && product?.options?.product) {
    return <h1>Product {product?.options?.product}</h1>
  }

  return <h1>No product</h1>
};

export default Product