import React from "react"
import './Products.css'
import { useDispatch, useSelector } from "react-redux"
import { toggleToWishes } from "../../context/wishlistSlice"
import { FaRegHeart, FaHeart, FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../../context/cardSlice";
import { FcLike } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Products = ({ data, title }) => {
    const dispatch = useDispatch()
    const wishes = useSelector(state => state.wishlist.value)

    let products = data?.map((el) =>
        <div key={el.id} className="cardd">
            <Link to={`/product/${el.id}`}>
                <div class="card">
                    <div class="icon">
                        <img src={el.thumbnail} alt="" />
                    </div>
                    <span>
                        <div className="icons">
                            <button className='icons__button'> <FcLike /> </button>
                            <button className='icons__button'> <FaEye /> </button>
                        </div>
                        <button className='add'>Add to Card</button>
                    </span>
                </div>
            </Link>
            <h2>{el.title}</h2>
            <div className="price">
                <h3>${el.price}</h3>
                <div className="star">
                    <div class="rating">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label for="star5" title="text"></label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label for="star4" title="text"></label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label for="star3" title="text"></label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label for="star2" title="text"></label>
                        <input checked="" type="radio" id="star1" name="rate" value="1" />
                        <label for="star1" title="text"></label>
                    </div>
                </div>
                <h4>({el.rating.count})</h4>
            </div>
            <div className="wishlest__ic">
                <button className="wishlest__ic" onClick={() => dispatch(toggleToWishes(el))}>
                    {
                        wishes.some(w => w.id === el.id) ?
                            <FaHeart /> :
                            <FaRegHeart />
                    }
                </button>
                <button className="wishlest__ic" onClick={() => dispatch(addToCart(el))}><FaShoppingCart /></button>
            </div>
        </div >)
    return (
        <div>
            <h2>{title}</h2>
            <div className="wrapper container">
                {products}
            </div>
        </div>
    )
}

export default Products


