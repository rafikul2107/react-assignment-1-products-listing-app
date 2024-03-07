/* eslint-disable react/prop-types */
import React from 'react';

const Product = ({id,title,prices,description,category,image,rate,count}) => {
// console.log(product.id)
   console.log(count)
  return (
    <div className='product'>
      <div className='card'>
      <article key={id} >
      <img src={image} alt="prodac" className='product__img'/>
      <div className="product__details">
        <h4 className="product__title">Title: {title}</h4>
        <p className='colar'>Category: {category}</p>
        <p className='colar'>Price: ${prices}</p>
        <p className='product__ratingr colar'> Rate: {rate} </p>
        <p className='colar'>Count: {count}</p>
        <p className="product__desc">Description: {description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
      </div>
    </div>
  );
};

export default Product;

