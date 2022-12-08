import React from 'react';
import "./Collection.css";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import showcase1 from "../../images/showcase-1.jpg";
import showcase2 from "../../images/showcase-2.jpg";
import showcase3 from "../../images/showcase-3.jpg";
import showcase4 from "../../images/showcase-4.jpg";
import showcase5 from "../../images/showcase-5.jpg";
import showcase6 from "../../images/showcase-6.gif";


import avatar1 from "../../images/avatar-1.jpg";
import avatar2 from "../../images/avatar-2.jpg";
import avatar3 from "../../images/avatar-3.jpg";
import avatar4 from "../../images/avatar-4.jpg";
import avatar5 from "../../images/avatar-5.jpg";
import avatar6 from "../../images/avatar-6.gif";


const FakeCollection = () => {

    
    const handleDragStart = (e) => e.preventDefault();


    const items = [
    
    
    

<div>

<div style={{display: "flex", flexDirection: "row"}}>
              <div>
                <div class="collection-card card">

                  <figure class="card-banner img-holder" style={{width: "22rem", height: "30rem"}}>
                    <img src={showcase3} width="22rem" height="30rem" loading="lazy"
                      alt="Sports Collection" class="img-cover" />
                  </figure>

                  <div class="card-content">

                    <div class="card-profile">
                      <img src={avatar3} width="64" height="64" loading="lazy"
                        alt="NorseQueen profile" />

                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>
                    </div>

                    <h3 class="title-md card-title">
                      <a href="#" class="link:hover">Sports Collection</a>
                    </h3>

                    <p class="label-md card-author">
                      by <a href="#" class="link">@NorseQueen</a>
                    </p>

                    <p class="card-text">25 Items</p>

                  </div>

                </div>
              </div>

              <div class="slider-item">
                <div class="collection-card card">

                  <figure class="card-banner img-holder" style={{width: "22rem", height: "30rem"}}>
                    <img src={showcase4} width="22rem" height="30rem" loading="lazy"
                      alt="Photography Collection" class="img-cover" />
                  </figure>

                  <div class="card-content">

                    <div class="card-profile">
                      <img src={avatar4} width="64" height="64" loading="lazy"
                        alt="BigBull profile" />

                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>
                    </div>

                    <h3 class="title-md card-title">
                      <a href="#" class="link:hover">Photo Collection</a>
                    </h3>

                    <p class="label-md card-author">
                      by <a href="#" class="link">@BigBull</a>
                    </p>

                    <p class="card-text">25 Items</p>

                  </div>

                </div>
              </div>

              <div class="slider-item">
                <div class="collection-card card">

                  <figure class="card-banner img-holder" style={{width: "22rem", height: "30rem"}}>
                    <img src={showcase5} width="22rem" height="30rem" loading="lazy"
                      alt="Illustrations Collection" class="img-cover" />
                  </figure>

                  <div class="card-content">

                    <div class="card-profile">
                      <img src={avatar5} width="64" height="64" loading="lazy" alt="Angel profile" />

                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>
                    </div>

                    <h3 class="title-md card-title">
                      <a href="#" class="link:hover">Illustrations Collection</a>
                    </h3>

                    <p class="label-md card-author">
                      by <a href="#" class="link">@Angel</a>
                    </p>

                    <p class="card-text">25 Items</p>

                  </div>

                </div>
              </div>

              <div class="slider-item">
                <div class="collection-card card">

                  <figure class="card-banner img-holder" style={{width: "22rem", height: "30rem"}}>
                    <img src={showcase6} width="22rem" height="30rem" loading="lazy"
                      alt="Animations Collection" class="img-cover" />
                  </figure>

                  <div class="card-content">

                    <div class="card-profile">
                      <img src={avatar6} width="64" height="64" loading="lazy"
                        alt="CrazyAnyone profile" />

                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>
                    </div>

                    <h3 class="title-md card-title">
                      <a href="#" class="link:hover">Animations Collection</a>
                    </h3>

                    <p class="label-md card-author">
                      by <a href="#" class="link">@CrazyAnyone</a>
                    </p>

                    <p class="card-text">25 Items</p>

                  </div>

                </div>
              </div>
</div>
</div>

    ]


    const Responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 4,
        },
        
    };
      

  return (
    <section class="section top-collection" aria-labelledby="collection-label">
        <div class="container">

          <div class="title-wrapper">
            <h2 class="headline-md section-title text-center" id="collection-label">Top Collections</h2>

            <a href="#" class="btn-link link:hover">
              <span class="span">See More</span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>
          </div>


  
            <AliceCarousel mouseTracking
                               infinite
                               autoPlayInterval={1500}
                               animationDuration={1500}
                               disableDotsControls
                               disableButtonsControls
                               responsive={Responsive}
                               autoPlay
                              
                              items={items}
                               />

             

            <button class="slider-btn prev" aria-label="Slide to previous item" data-slider-prev>
              <ion-icon name="chevron-back-sharp" aria-hidden="true"></ion-icon>
            </button>

            <button class="slider-btn next" aria-label="Slide to next item" data-slider-next>
              <ion-icon name="chevron-forward-sharp" aria-hidden="true"></ion-icon>
            </button>


          <a href="#" class="btn-link link:hover">
            <span class="span">See More</span>

            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>

        </div>
      </section>




  )
}

export default FakeCollection;