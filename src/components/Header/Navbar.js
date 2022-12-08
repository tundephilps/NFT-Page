import React, { useState } from 'react'
import "./Navbar.css"

import  logo from "../../images/logo-small.svg";

import profile from "../../images/profile.jpg";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

    const [ showMenu, setShowMenu ] = useState(false)

  return (
    <div>
            <nav className='top-0'>
                <i className='fas fa-bars' onClick={() => setShowMenu(!showMenu)}></i>

                <a href='/'>
                    
        <img src={logo} width="40" height="40" alt="Metalink home"  />
                </a>

                <div className={showMenu ? 'menu mobile-menu' : "menu" }>
                    
                    <ul>
                        <i className='fas fa-times'  onClick={() => setShowMenu(!showMenu)} ></i>
                        <li> <a href='#'>Home</a></li>
                        <li> <a href='#'>Explore</a></li>
                        <li> <a href='#'>Wallet</a></li>
                        <li> <a href='#'>About Us</a></li>
                    </ul>

                    <div className='link'>
                        <a href='#'>My WishList</a>
                        <a href='#'>Login</a>
                        <a href='#'>Create An Account</a>
                    </div>

                </div>
                <div className='icons'>
        
                    <i class='fas fa-search' ></i>
        
                </div>
                <div style={{display: "flex", gap: "8px" }}>
                    
        <button class="btn-icon primary" aria-label="wallet">
          <ion-icon name="wallet-outline">
          <i class='fas fa-wallet' aria-hidden="true"></i>
          </ion-icon>
        </button>
        <button class="btn-icon profil-btn" >
          <img src={profile} style={{borderRadius: "50%"}} width="50" height="50" alt="Fiona doe" className="img-cover" />
        </button>

                </div>

                <div className={showMenu ? 'overlay active' : "overlay" }></div>
            </nav>

    </div>
  )
}

export default Navbar