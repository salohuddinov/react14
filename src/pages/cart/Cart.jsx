import React from 'react'
import './Cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { incCart, decCart, removeFromCart } from '../../context/cardSlice'
import { FaTrashAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { CgChevronUp } from "react-icons/cg";




const Cart = () => {
  let cart = useSelector((state) => state.cart.value)
  const dispatch = useDispatch()

  const handleDecerment = (el) => {
    if (el.quantity <= 1) {
      dispatch(removeFromCart(el))
    } else {
      dispatch(decCart(el))
    }
  }

  let items = cart?.map((el) =>
    <div key={el.id} className='items'>
      <div className="items__img">
        <img src={el.thumbnail} width={100} alt={el.brand} />
        <p>{el.title}</p>
      </div>
      <h3> {el.price * el.quantity} </h3>
      <div className="inc__dec">
        <h4> {el.quantity} </h4>
        <div className="dec">
          <button onClick={() => handleDecerment(el)}>-</button>
          <button onClick={() => dispatch(incCart(el))}>+</button>
        </div>
      </div>
      <div className="subtotal">
        <h3>{el.price * el.quantity}</h3>
      </div>
      <button onClick={() => dispatch(removeFromCart(el))}> <FaTrashAlt /> </button>
    </div>
  )

  // let dale = cart?.map((el) =>
  //   <button onClick={() => dispatch(clearCart(el))}>dale <FaTrashAlt /></button>
  // )
  return (
    <>
      <div className="container">
        <div className="cards">
          {items}
          {/* {dale} */}
        </div>
      </div>
    </>
  )
}

export default Cart