import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from "../../utils/helpers";
import "./Product.css";
import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
import { addToCart, getCartMessageStatus, setCartMessageOff, setCartMessageOn } from '../../store/cartSlice';
import CartMessage from "../../components/CartMessage/CartMessage";


const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const cartMessageStatus = useSelector(getCartMessageStatus);

  // getting single product
  useEffect(() => {
    if (cartMessageStatus) {
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
    }
  }, [cartMessageStatus]);

  const addToCartHandler = (product) => {
    let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100));
    let totalPrice = quantity * discountedPrice;

    dispatch(addToCart({ ...product, quantity: quantity, totalPrice, discountedPrice }));
    dispatch(setCartMessageOn(true));
  }

  return (
    <div className='product-item bg-white'>
      {/* <Link to={`/product/${product?.id}`} key={product?.id}> */}
      <div className='category'>{product?.category}</div>
      <div className='product-item-img'>
        <img className='img-cover' src={product?.images[0]} alt={product.title} />
      </div>
      {/* </Link> */}
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


      {/* button */}
      <div className='btns'>
        <button type="button" className='add-to-cart-btn btn'>
          <span className='btn-text' onClick={() => { addToCartHandler(product) }}>addTo</span>
          <i className='fas fa-shopping-cart'></i>
        </button>

        <button type="button" className='buy-now btn mx-3'>
          <span className='btn-text'> <Link to={`/product/${product?.id}`} key={product?.id}>Details </Link></span>
        </button>

      </div>
      {cartMessageStatus && <CartMessage />}
    </div>

  )
}

export default Product