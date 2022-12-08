import React from 'react'
import "./Creator.css";
import {BsPersonPlus} from "react-icons/bs"
import {IoMdCheckmarkCircle} from "react-icons/io"

import avatar1 from "../../images/avatar-1.jpg";
import avatar2 from "../../images/avatar-2.jpg";
import avatar3 from "../../images/avatar-3.jpg";
import avatar4 from "../../images/avatar-4.jpg";
import avatar5 from "../../images/avatar-5.jpg";
import avatar6 from "../../images/avatar-6.gif";


const Creator = () => {
  return (
    <section class="section sellers" aria-labelledby="sellers-label">
        <div class="container">

          <h2 class="headline-md section-title text-center" id="sellers-label">Best Creators & Sellers</h2>

          <ul className="grid-list">

            <li>
              <div class="seller-card">

                <figure class="card-banner">
                  <img src={avatar1} width="64" height="64" loading="lazy"
                    alt="Steven Townsend profile" />

                  <ion-icon name="checkmark-circle"><IoMdCheckmarkCircle /></ion-icon>
                </figure>

                <div class="card-title-wrapper">
                  <h3 class="title-sm">
                    <a href="#" class="link:hover">Steven Townsend</a>
                  </h3>

                  <p class="user-name label-md">@StreetBoy</p>
                </div>

                <button class="btn-icon outline" aria-label="Hire Steven Townsend">
                  <ion-icon name="person-add-outline" aria-hidden="true"><BsPersonPlus /></ion-icon>
                </button>

              </div>
            </li>

            <li>
              <div class="seller-card">

                <figure class="card-banner">
                  <img src={avatar2} width="64" height="64" loading="lazy"
                    alt="Tiffany Betancourt profile" />

                  <ion-icon name="checkmark-circle"><IoMdCheckmarkCircle /></ion-icon>
                </figure>

                <div class="card-title-wrapper">
                  <h3 class="title-sm">
                    <a href="#" class="link:hover">Tiffany Betancourt</a>
                  </h3>

                  <p class="user-name label-md">@CutieGirl</p>
                </div>

                <button class="btn-icon outline" aria-label="Hire Tiffany Betancourt">
                  <ion-icon name="person-add-outline" aria-hidden="true"><BsPersonPlus /></ion-icon>
                </button>

              </div>
            </li>

            <li>
              <div class="seller-card">

                <figure class="card-banner">
                  <img src={avatar3} width="64" height="64" loading="lazy"
                    alt="Jacqueline Burns profile" />

                  <ion-icon name="checkmark-circle"><IoMdCheckmarkCircle /></ion-icon>
                </figure>

                <div class="card-title-wrapper">
                  <h3 class="title-sm">
                    <a href="#" class="link:hover">Jacqueline Burns</a>
                  </h3>

                  <p class="user-name label-md">@ButterFly</p>
                </div>

                <button class="btn-icon outline" aria-label="Hire Jacqueline Burns">
                  <ion-icon name="person-add-outline" aria-hidden="true"><BsPersonPlus /></ion-icon>
                </button>

              </div>
            </li>

            <li>
              <div class="seller-card">

                <figure class="card-banner">
                  <img src={avatar4} width="64" height="64" loading="lazy"
                    alt="Mari Harrington profile" />

                  <ion-icon name="checkmark-circle"><IoMdCheckmarkCircle /></ion-icon>
                </figure>

                <div class="card-title-wrapper">
                  <h3 class="title-sm">
                    <a href="#" class="link:hover">Mari Harrington</a>
                  </h3>

                  <p class="user-name label-md">@NorseQueen</p>
                </div>

                <button class="btn-icon outline" aria-label="Hire Mari Harrington">
                  <ion-icon name="person-add-outline" aria-hidden="true"><BsPersonPlus /></ion-icon>
                </button>

              </div>
            </li>

            <li>
              <div class="seller-card">

                <figure class="card-banner">
                  <img src={avatar5} width="64" height="64" loading="lazy"
                    alt="Floyd Glasgow profile" />

                  <ion-icon name="checkmark-circle"><IoMdCheckmarkCircle /></ion-icon>
                </figure>

                <div class="card-title-wrapper">
                  <h3 class="title-sm">
                    <a href="#" class="link:hover">Floyd Glasgow</a>
                  </h3>

                  <p class="user-name label-md">@BigBull</p>
                </div>

                <button class="btn-icon outline" aria-label="Hire Floyd Glasgow">
                  <ion-icon name="person-add-outline" aria-hidden="true"><BsPersonPlus /></ion-icon>
                </button>

              </div>
            </li>

            <li>
              <div class="seller-card">

                <figure class="card-banner">
                  <img src={avatar6} width="64" height="64" loading="lazy"
                    alt="Donna Schultz profile" />

                  <ion-icon name="checkmark-circle"><IoMdCheckmarkCircle /></ion-icon>
                </figure>

                <div class="card-title-wrapper">
                  <h3 class="title-sm">
                    <a href="#" class="link:hover">Donna Schultz</a>
                  </h3>

                  <p class="user-name label-md">@Angel</p>
                </div>

                <button class="btn-icon outline" aria-label="Hire Donna Schultz">
                  <ion-icon name="person-add-outline" aria-hidden="true"><BsPersonPlus /></ion-icon>
                </button>

              </div>
            </li>

        
          </ul>

        </div>
      </section>

  )
}

export default Creator;