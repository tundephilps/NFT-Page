import React from 'react'
import "./Discover.css";
import {FaEthereum, FaLongArrowAltRight} from "react-icons/fa"
import showcase1 from "../../images/showcase-1.jpg";
import showcase2 from "../../images/showcase-2.jpg";

import showcase7 from "../../images/showcase-7.jpg";
import showcase8 from "../../images/showcase-8.gif";

import avatar1 from "../../images/avatar-1.jpg";
import avatar2 from "../../images/avatar-2.jpg";
import avatar7 from "../../images/avatar-7.jpg";
import avatar8 from "../../images/avatar-8.jpg";

import ethereum from "../../images/ethereum";

const Discover = () => {
  return (

    <section class="section discover" aria-labelledby="discover-label">
    <div class="container">

      <h2 class="headline-md section-title text-center" id="discover-label">Discover Items</h2>

      <ul class="grid-list">

        <li>
          <div class="discover-card card">

            <div class="card-banner img-holder" style={{width: "500", height: "500"}}>
              <img src={showcase8} width="500" height="500" loading="lazy"
                alt="Genuine Undead #3902" class="img-cover" />

              <button class="btn btn-primary">
                <ion-icon name="flash" aria-hidden="true"></ion-icon>

                <span class="span">Place Bid</span>
              </button>
            </div>

            <div class="card-profile">
              <img src={avatar8} width="32" height="32" loading="lazy" alt="StreetBoy profile"
                class="img" />

              <a href="#" class="link:hover">@StreetBoy</a>
            </div>

            <h3 class="title-sm card-title">
              <a href="#" class="link:hover">Genuine Undead #3902</a>
            </h3>

            <div class="card-meta">

              <div>
                <p>Price</p>

                <div class="card-price">
                    <FaEthereum  width="16" height="24" loading="lazy" alt="ethereum icon" />
                  <span class="span">3.5 ETH</span>
                </div>
              </div>

              <div>
                <p>Highest Bid</p>

                <div class="card-price">
                    
                <FaEthereum  width="16" height="24" loading="lazy" alt="ethereum icon" />
                  <span class="span">3.55 ETH</span>
                </div>
              </div>

            </div>

          </div>
        </li>

        <li>
          <div class="discover-card card">

            <div class="card-banner img-holder" style={{width: "500", height: "500"}}>
              <img src={showcase7} width="500" height="500" loading="lazy" alt="Windchime #768"
                class="img-cover" />

              <button class="btn btn-primary">
                <ion-icon name="flash" aria-hidden="true"></ion-icon>

                <span class="span">Place Bid</span>
              </button>

              <div class="countdown">
                <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                <span class="span">5d 04h 18m 04s</span>
              </div>
            </div>

            <div class="card-profile">
              <img src={avatar7} width="32" height="32" loading="lazy" alt="CutieGirl profile"
                class="img" />

              <a href="#" class="link:hover">@CutieGirl</a>
            </div>

            <h3 class="title-sm card-title">
              <a href="#" class="link:hover">Windchime #768</a>
            </h3>

            <div class="card-meta">

              <div>
                <p>Price</p>

                <div class="card-price">
                    
                <FaEthereum  width="16" height="24" loading="lazy" alt="ethereum icon" />
                  <span class="span">3.5 ETH</span>
                </div>
              </div>

              <div>
                <p>Highest Bid</p>

                <div class="card-price">
                    
                <FaEthereum  width="16" height="24" loading="lazy" alt="ethereum icon" />
                  <span class="span">3.55 ETH</span>
                </div>
              </div>

            </div>

          </div>
        </li>



        <li>
          <div class="discover-card card">

            <div class="card-banner img-holder" style={{width: "500", height: "500"}}>
              <img src={showcase2} width="500" height="500" loading="lazy" alt="Looki #0147"
                class="img-cover" />

              <button class="btn btn-primary">
                <ion-icon name="flash" aria-hidden="true"></ion-icon>

                <span class="span">Place Bid</span>
              </button>

              <div class="countdown">
                <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                <span class="span">10d 23h 24m 10s</span>
              </div>
            </div>

            <div class="card-profile">
              <img src={avatar2} width="32" height="32" loading="lazy"
                alt="CrazyAnyone profile" class="img" />

              <a href="#" class="link:hover">@CrazyAnyone</a>
            </div>

            <h3 class="title-sm card-title">
              <a href="#" class="link:hover">Looki #0147</a>
            </h3>

            <div class="card-meta">

              <div>
                <p>Price</p>

                <div class="card-price">
                    <FaEthereum  width="16" height="24" loading="lazy" alt="ethereum icon" />
                  <span class="span">3.5 ETH</span>
                </div>
              </div>

              <div>
                <p>Highest Bid</p>

                <div class="card-price">
                    <FaEthereum  width="16" height="24" loading="lazy" alt="ethereum icon" />
                  <span class="span">3.55 ETH</span>
                </div>
              </div>

            </div>

          </div>
        </li>

        <li>
              <div class="discover-card card">

                <div class="card-banner img-holder" style={{width: "500", height: "500"}}>
                  <img src={showcase1} width="500" height="500" loading="lazy" alt="Poob #285"
                    class="img-cover" />

                  <button class="btn btn-primary">
                    <ion-icon name="flash" aria-hidden="true"></ion-icon>

                    <span class="span">Place Bid</span>
                  </button>
                </div>

                <div class="card-profile">
                  <img src={avatar1} width="32" height="32" loading="lazy" alt="Princess profile"
                    class="img" />

                  <a href="#" class="link:hover">@Princess</a>
                </div>

                <h3 class="title-sm card-title">
                  <a href="#" class="link:hover">Poob #285</a>
                </h3>

                <div class="card-meta">

                  <div>
                    <p>Price</p>

                    <div class="card-price">
                     <FaEthereum />
                      <span class="span">3.5 ETH</span>
                    </div>
                  </div>

                  <div>
                    <p>Highest Bid</p>

                    <div class="card-price">
                    <FaEthereum />
                      <span class="span">3.55 ETH</span>
                    </div>
                  </div>

                </div>

              </div>
            </li>



      </ul>

      <a href="#" class="btn-link link:hover">
        <span class="span">Explore More</span>

        <FaLongArrowAltRight name="arrow-forward" aria-hidden="true" />
      </a>

    </div>
  </section>



  )
}

export default Discover