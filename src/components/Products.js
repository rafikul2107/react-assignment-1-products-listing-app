/* eslint-disable react/prop-types */
import React from 'react';
import Product from '../components/Product'

 function Products({products}) {
console.log(products)

  return (
    <div>
        <Product/>
    </div>
  )
}
export default Products;