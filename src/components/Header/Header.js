import React from 'react'
import "./Header.scss";
import  logosmall from "../../images/logo-small.svg";
import { GrMenu, GrClose } from "react-icons/gr";
import { BiWallet } from "react-icons/bi";
import logo from "../../images/logo.svg";
import profile from "../../images/profile.jpg";


const Header = () => {
  return (
       <header className="header" data-header>
    <div class="container">

      <a href="#">
        <img src={logosmall} width="40" height="40" alt="Metalink home" class="logo-small" />
        <img src={logo} width="126" height="28" alt="Metalink home" class="logo" />
      </a>

      <nav class="navbar" data-navbar>
        <ul class="navbar-list">

          <li>
            <a href="#" class="navbar-link label-lg link:hover">Home</a>
          </li>

          <li>
            <a href="#" class="navbar-link label-lg link:hover">Explore</a>
          </li>

          <li>
            <a href="#" class="navbar-link label-lg link:hover">Wallet</a>
          </li>

          <li>
            <a href="#" class="navbar-link label-lg link:hover">About Us</a>
          </li>

          <li>
            <a href="#" class="navbar-link label-lg link:hover">Contact</a>
          </li>

        </ul>
      </nav>

      <div class="header-action">

        <button class="btn-icon primary" aria-label="wallet">
          <ion-icon name="wallet-outline">
          <BiWallet /></ion-icon>
        </button>

        <button class="btn-icon profil-btn" >
          <img src={profile} width="50" height="50" alt="Fiona doe" className="img-cover" />
        </button>

        <button class="nav-toggle-btn" aria-label="menu toggle" data-nav-toggler>
          <ion-icon name="menu-outline" aria-hidden="true" class="default-icon">
          <GrMenu />
          </ion-icon>
         {/*  <ion-icon name="close-outline" aria-hidden="true" class="active-icon"></ion-icon>*/}
        </button>

      </div>

    </div>
  </header>


  )
}

export default Header