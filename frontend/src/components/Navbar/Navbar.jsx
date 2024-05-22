/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import './Navbar.css'
import { IoSearch } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import { FaUserCircle } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

export default function Navbar({setShowLogin}) {

    const [menu, setMenu] = useState('home')
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("token")
        setToken('')
        navigate('/')
    }

  return (
    <div className='navbar'>
        <Link to='/'><h1 className='title'>Flavory.</h1></Link>
        <ul className="navbar-menu">
            <Link to="/" onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>menu</a>
            <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>contact-us</a>
        </ul>
        <div className="navbar-right">
            <IoSearch className='logo'/>
            <div className="navbar-search-icon">
                <Link to='/cart'><FaShoppingBag className='logo'/></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
            :<div className='navbar-profile'>
                <FaUserCircle className='icon-profile'/>
                <ul className='nav-profile-dropdown'>
                    <li onClick={()=>navigate('/myorders')}><IoBagOutline className='icon'/><p>Orders</p></li>
                    <hr />
                    <li onClick={logout}><MdLogout className='icon'/><p>Logout</p></li>
                </ul>
            </div>}
        </div>
    </div>
  )
}
