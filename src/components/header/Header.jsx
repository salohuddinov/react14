import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

function Header() {
    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="headercont">
                        <div className="cent__title">
                            <h2>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h2>
                            <button>ShopNow</button>
                        </div>
                        <h3>English</h3>
                    </div>
                </div>
            </div>
            <div className="header__bootm container">
                <div className="nav__item">
                    <Link to={"/"}><h2 className='zep'>Exclusive</h2></Link>
                    <div className="item__left">
                        <NavLink to={"/"}><h2>Home</h2></NavLink>
                        <h2>Contact</h2>
                        <NavLink to={"/about"}><h2>about</h2></NavLink>
                        <h2>Signup</h2>

                    </div>
                </div>
                <div className="header__right">
                    <form className='header__from'>
                        <input type="text" />
                        <button type='button'> <IoSearch /> </button>
                    </form>
                    <div className="icon">
                        <NavLink to={"/wishlist"}><button className='header__wish'><FaRegHeart /></button></NavLink>
                        <NavLink to={"/cart"}> <button className='header__wish'> <MdOutlineShoppingCart /> </button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header