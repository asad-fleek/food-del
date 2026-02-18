import './styles.css'
import { assets } from '../../utiles/image.js'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import LoginPopup from '../login-popup/index.jsx'
import { StoreContext } from '../../context/index.jsx'

const Navbar = () => {

    const [menu, setMenu] = useState("menu")
    const [showLogin, setshowLogin] = useState(false)
    const { getTotalCartAmount } = useContext(StoreContext)


    return (
        <>
            {showLogin && <LoginPopup />}
            <div className='navbar'>
                <Link to='/'><img src={assets.logo} alt="logo" /></Link>
                <ul className='navbar-menu'>
                    <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                    <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                    <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
                    <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
                </ul>
                <div className='navbar-right'>
                    <img src={assets.search_icon} alt="icon" />
                    <div className='navbar-search-icon'>
                        <Link to='/cart'><img src={assets.basket_icon} alt="icon" /></Link>
                        <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                    </div>
                    <button onClick={() => setshowLogin(true)}>Sign In</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;