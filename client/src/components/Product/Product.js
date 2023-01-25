import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from "../../utils/helpers";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className='product-item bg-white'>
      {/* <Link to={`/product/${product?.id}`} key={product?.id}> */}
      <div className='category'>{product?.category}</div>
      <div className='product-item-img'>
        <img className='img-cover' src={product?.images[0]} alt={product.title} />
      </div>
      <div className='product-item-info fs-14'>
        <div className='brand'>
          <span>Brand: </span>
          <span className='fw-7 ' style={{ color: 'black' }}>{product?.brand}</span>
        </div>
        <div className='title py-2'>
          {product?.title}
        </div>
        <div className='price flex align-center justify-center'>
          <span className='old-price'>
            {formatPrice(product?.price)}
          </span>
          <span className='new-price'>
            {formatPrice(product?.discountedPrice)}
          </span>
          <span className='discount fw-6'>
            ({product?.discountedPercentage}% Off)
          </span>
        </div>
      </div>
      {/* </Link> */}
      {/* button */}
      <div className='btns'>
        <Link to={`/product/${product?.id}`} key={product?.id}>
          <button type="button" className='add-to-cart-btn btn'>
            <span className='btn-text'>addTo</span>
            <i className='fas fa-shopping-cart'></i>
          </button>
        </Link>
        <button type="button" className='buy-now btn mx-3'>
          <span className='btn-text'>buy now</span>
        </button>
      </div>
    </div>

  )
}

export default Product