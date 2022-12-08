import React from 'react'
import logo from "../../images/logo.svg"
import {MdArrowForwardIos, MdEmail, MdOutlineCall} from "react-icons/md";
import "./Footer.css";
import appstore from "../../images/appstore.png";
import playstore from "../../images/playstore.png";

const Footer = () => {
  return (
   
  <footer class="footer">

  <div class="section footer-top">
    <div class="container">

      <div class="footer-brand">

        <a href="#">
          <img src={logo} width="126" height="28" loading="lazy" alt="Metalink home" />
        </a>

        <p class="body-md footer-text">
          Buy, sell and discover exclusive digital assets by the top artists of NFTs world.
        </p>

      </div>

      <ul class="footer-list">

        <li>
          <p class="title-lg footer-list-title">Metalink</p>
        </li>

        <li>
          <a href="#" class="footer-link">
            <ion-icon name="chevron-forward"><MdArrowForwardIos /></ion-icon>

            <span class="span">Explore Item</span>
          </a>
        </li>

        <li>
          <a href="#" class="footer-link">
            <ion-icon name="chevron-forward"><MdArrowForwardIos /></ion-icon>

            <span class="span">Live Auction</span>
          </a>
        </li>

        <li>
          <a href="#" class="footer-link">
            <ion-icon name="chevron-forward"><MdArrowForwardIos /></ion-icon>

            <span class="span">Activities</span>
          </a>
        </li>

        <li>
          <a href="#" class="footer-link">
            <ion-icon name="chevron-forward"><MdArrowForwardIos /></ion-icon>

            <span class="span">Wallets</span>
          </a>
        </li>

        <li>
          <a href="#" class="footer-link">
            <ion-icon name="chevron-forward"><MdArrowForwardIos /></ion-icon>

            <span class="span">Creators</span>
          </a>
        </li>

      </ul>

      <ul class="footer-list">

        <li>
          <p class="title-lg footer-list-title">Useful Links</p>
        </li>

        <li>
          <a href="#" class="footer-link">
            <ion-icon name="chevron-forward"><MdArrowForwardIos /></ion-icon>

            <span class="span">About Us</span>
          </a>
        </li>

        <li>
          <a href="#" class="footer-link">
            <ion-icon name="chevron-forward"><MdArrowForwardIos /></ion-icon>

            <span class="span">Blog & News</span>
          </a>
        </li>

        <li>
          <a href="#" class="footer-link">
            <ion-icon name="chevron-forward"><MdArrowForwardIos /></ion-icon>

            <span class="span">Terms & Condition</span>
          </a>
        </li>

        <li>
          <a href="#" class="footer-link">
            <ion-icon name="chevron-forward"><MdArrowForwardIos /></ion-icon>

            <span class="span">Privacy policy</span>
          </a>
        </li>

        <li>
          <a href="#" class="footer-link">
            <ion-icon name="chevron-forward"><MdArrowForwardIos /></ion-icon>

            <span class="span">Login</span>
          </a>
        </li>

        <li>
          <a href="#" class="footer-link">
            <ion-icon name="chevron-forward"><MdArrowForwardIos /></ion-icon>

            <span class="span">Contact Us</span>
          </a>
        </li>

      </ul>

      <div class="footer-list">

        <ul>

          <li>
            <p class="title-lg footer-list-title">Download the Metalink app</p>
          </li>

          <li class="footer-list-item">
            <a href="#">
              <img src={appstore} width="134" height="40" loading="lazy"
                alt="Download Metalink app from AppStore" />
            </a>

            <a href="#">
              <img src={playstore} width="134" height="40" loading="lazy"
                alt="Download Metalink app from PlayStore" />
            </a>
          </li>

        </ul>

        <ul>

          <li>
            <p class="title-lg footer-list-title">Contact Details</p>
          </li>

          <li class="footer-list-item">
            <ion-icon name="mail-outline" aria-hidden="true"><MdEmail /></ion-icon>

            <a href="mailto:metalink@nft.com" class="footer-link">metalink@nft.com</a>
          </li>

          <li class="footer-list-item">
            <ion-icon name="call-outline" aria-hidden="true"><MdOutlineCall /></ion-icon>

            <a href="tel:+111 234-567-891" class="footer-link">+111 234-567-891</a>
          </li>

        </ul>

      </div>

    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">

      <p class="body-md text-center copyright">
        &copy; 2022 Metalink. Developed with <span class="span">❤</span> by TundePhilps.
      </p>

    </div>
  </div>

</footer>

  )
}

export default Footer