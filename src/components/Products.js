/* eslint-disable react/prop-types */
import React from 'react';
import Product from '../components/Product'

 function Products({myproducts}) {
// console.log(myproducts[0])
  return (
    <div>
      {myproducts.map((product,index)=> <Product 
      key={index}
      id={product.id}
      title={product.title}
      prices={product.price}
      description={product.description}
      category={product.category}
      image={product.image}
      rate={product.rating.rate}
      count={product.rating.count}
      />)}
 
    </div>
  )
}
export default Products;