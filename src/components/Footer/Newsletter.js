import React from 'react'
import "./Newsletter.css"
import { MdOutlineMailOutline } from "react-icons/md";
import { FiFileText } from "react-icons/fi";

const Newsletter = () => {
  return (
    <section class="section newsletter" aria-label="newsletter">
    <div class="container">

      <div class="newsletter-card">

        <div>
          <h3 class="headline-md text-center">Subscribe to Newsletter!</h3>

          <p class="body-md card-text text-center">
            Subscribe to get latest updates and information.
          </p>
        </div>

        <div class="input-wrapper">
          <input type="email" name="email_address" placeholder="Enter your email :" required class="input-field" />

          <button class="btn btn-primary">Subscribe</button>
        </div>

        <ion-icon name="mail-open-outline" aria-hidden="true" class="bg-icon bg-icon-1"><MdOutlineMailOutline /></ion-icon>

        <ion-icon name="document-text-outline" aria-hidden="true" class="bg-icon bg-icon-2"><FiFileText /></ion-icon>

      </div>

    </div>
  </section>

  )
}

export default Newsletter