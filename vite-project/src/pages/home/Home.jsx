
import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/heroSection.jsx';
import Filter from '../../components/filter/Filter.jsx';
import ProductCard from '../../components/productCard/ProductCard.jsx';
import Testimonial from '../../components/testimonial/Testimonial.jsx';

import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartslice.jsx'

function Home() {

  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)

  console.log(cartItem)

  // const addCart = () => {
  //   dispatch(addToCart("shirt"));
  // }

  const addCart = () => {
    dispatch({ type: 'cart/addToCart', payload: 'shirt' });
  };

  // const deleteCart = () => {
  //     dispatch(deleteFromCart("shirt"));
  //   }

  const deleteCart = () => {
    dispatch({ type: 'cart/deleteFromCart', payload: 'shirt' });
  };
  

  return (
    <Layout>
       <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}>del</button>
      </div>
      < HeroSection/>
      <Filter/>
      <ProductCard/>
      <Testimonial/>
    </Layout>
  );
}

export default Home

// update //update