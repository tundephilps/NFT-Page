import React from 'react'
import "./Collections.scss"
import { BsInfoCircle } from "react-icons/bs"
import avatar1 from "../../images/avatar-1.jpg";
import avatar2 from "../../images/avatar-2.jpg";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import showcase3 from "../../images/showcase-3.jpg";
import showcase4 from "../../images/showcase-4.jpg";
import showcase5 from "../../images/showcase-5.jpg";
import showcase6 from "../../images/showcase-6.gif";

import avatar3 from "../../images/avatar-3.jpg";
import avatar4 from "../../images/avatar-4.jpg";
import avatar5 from "../../images/avatar-5.jpg";
import avatar6 from "../../images/avatar-6.gif";



const Collections = () => {


    const handleDragStart = (e) => e.preventDefault();

    const items = [

<div id="wrapper"  onDragStart={handleDragStart}>
        <div id="container"  style={{ backgroundImage: `url(${showcase6})`, backgroundSize: "100%", objectFit: "cover" }}>
          <div class="top"></div>
          <div class="bottom">
            <div class="left">
              <div class="details">
                <h1>NightMare</h1>
                <p>£250</p>
              </div>
              <div class="buy" ><img src={avatar3} style={{backgroundSize: "" }} /></div>
            </div>
            <div class="right">
              <div class="done"><i class="material-icons">done</i></div>
              <div class="details">
                <h1>Chair</h1>
              </div>
              <div class="remove"><i class="material-icons">clear</i></div>
            </div>
          </div>
        </div>
        <div class="inside"><div class="icon"><BsInfoCircle /></div>
          <div class="contents">
            <table>
              <tr>
                <th>Width</th>
                <th>Height</th>
              </tr>
              <tr>
                <td>3000mm</td>
                <td>4000mm</td>
              </tr>
             
              <tr>
                <th>Something</th>
                <th>Something</th>
              </tr>
              <tr>
                <td>200mm</td>
                <td>200mm</td>
              </tr>
            </table>
          </div>
        </div>
      </div>,
    
    
      <div id="wrapper"  onDragStart={handleDragStart}>
        <div id="container"  style={{ backgroundImage: `url(${showcase5})`, backgroundSize: "125%", backgroundRepeat: "no-repeat", }}>
          <div class="top"></div>
          <div class="bottom">
            <div class="left">
              <div class="details">
                <h1>Kong</h1>
                <p>£50</p>
              </div>
              <div class="buy" ><img src={avatar4} style={{backgroundSize: "" }} /></div>
            </div>
            <div class="right">
              <div class="done"><i class="material-icons">done</i></div>
              <div class="details">
                <h1>Chair</h1>
              </div>
              <div class="remove"><i class="material-icons">clear</i></div>
            </div>
          </div>
        </div>
        <div class="inside"><div class="icon"><BsInfoCircle /></div>
          <div class="contents">
            <table>
              <tr>
                <th>Width</th>
                <th>Height</th>
              </tr>
              <tr>
                <td>3000mm</td>
                <td>4000mm</td>
              </tr>
             
              <tr>
                <th>Something</th>
                <th>Something</th>
              </tr>
              <tr>
                <td>200mm</td>
                <td>200mm</td>
              </tr>
            </table>
          </div>
        </div>
      </div>,
    
    
      <div id="wrapper"  onDragStart={handleDragStart}>
        <div id="container" style={{ backgroundImage: `url(${showcase3})`, backgroundSize: "125%", backgroundRepeat: "no-repeat", }}>
          <div class="top"></div>
          <div class="bottom">
            <div class="left">
              <div class="details">
                <h1>Orc</h1>
                <p>£350</p>
              </div>
              <div class="buy" ><img src={avatar5} style={{backgroundSize: "" }} /></div>
            </div>
            <div class="right">
              <div class="done"><i class="material-icons">done</i></div>
              <div class="details">
                <h1>Chair</h1>
              </div>
              <div class="remove"><i class="material-icons">clear</i></div>
            </div>
          </div>
        </div>
        <div class="inside"><div class="icon"><BsInfoCircle /></div>
          <div class="contents">
            <table>
              <tr>
                <th>Width</th>
                <th>Height</th>
              </tr>
              <tr>
                <td>3000mm</td>
                <td>4000mm</td>
              </tr>
             
              <tr>
                <th>Something</th>
                <th>Something</th>
              </tr>
              <tr>
                <td>200mm</td>
                <td>200mm</td>
              </tr>
            </table>
          </div>
        </div>
      </div>,
    

    <div id="wrapper"  onDragStart={handleDragStart}>
    <div id="container" style={{ backgroundImage: `url(${showcase4})`, backgroundSize: "125%", backgroundRepeat: "no-repeat", }}>
      <div class="top"></div>
      <div class="bottom">
        <div class="left">
          <div class="details">
            <h1>Cowboy</h1>
            <p>£500</p>
          </div>
          <div class="buy" ><img src={avatar6} style={{backgroundSize: "" }} /></div>
        </div>
        <div class="right">
          <div class="done"><i class="material-icons">done</i></div>
          <div class="details">
            <h1>Chair</h1>
          </div>
          <div class="remove"><i class="material-icons">clear</i></div>
        </div>
      </div>
    </div>
    <div class="inside"><div class="icon"><BsInfoCircle /></div>
      <div class="contents">
        <table>
          <tr>
            <th>Width</th>
            <th>Height</th>
          </tr>
          <tr>
            <td>3000mm</td>
            <td>4000mm</td>
          </tr>
         
          <tr>
            <th>Something</th>
            <th>Something</th>
          </tr>
          <tr>
            <td>200mm</td>
            <td>200mm</td>
          </tr>
        </table>
      </div>
    </div>
  </div>,


    ];

    
const responsive = {
    0: {
        items: 1,
    },
    512: {
        items: 4,
        itemsFit: 'contain'
    },
};
  

  return (    
    <>
      <section class="section top-collection" aria-labelledby="collection-label">
        <div class="container">

          <div class="title-wrapper">
            <h2 class="headline-md section-title text-center" id="collection-label">Top Collections</h2>

          </div>


  
       <AliceCarousel mouseTracking
                               infinite
                               autoPlayInterval={1500}
                               animationDuration={1500}
                               disableDotsControls
                               disableButtonsControls
                               responsive={responsive}
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

  </>
  )
}

export default Collections