import React from 'react'
import "./QA.css"
import {MdCall} from "react-icons/md";
import {GrFormDown} from "react-icons/gr"


const QA = () => {
  return (
    <>    <section class="section qna" aria-label="question and answer">
    <div class="container">

      <h2 class="headline-md section-title text-center">Q&A</h2>

      <p class="section-text body-md text-center">
        We are a huge marketplace dedicated to connecting great artists of all Metalink with their fans and unique
        token collectors!
      </p>

      <ul class="qna-list">

        <li class="qna-item">
          <div class="qna-card" data-accordion>

            <button class="qna-btn" data-accordion-btn>
              <h3 class="title-sm">How does it work ?</h3>

              <ion-icon name="chevron-down" aria-hidden="true"><GrFormDown /></ion-icon>
            </button>

            <div class="qna-content">
              <p class="body-md">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form.
              </p>
            </div>

          </div>
        </li>

        <li class="qna-item">
          <div class="qna-card" data-accordion>

            <button class="qna-btn" data-accordion-btn>
              <h3 class="title-sm">Do I need a designer to use Metalink ?</h3>

              <ion-icon name="chevron-down" aria-hidden="true"><GrFormDown /></ion-icon>
            </button>

            <div class="qna-content">
              <p class="body-md">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form.
              </p>
            </div>

          </div>
        </li>

        <li class="qna-item">
          <div class="qna-card" data-accordion>

            <button class="qna-btn" data-accordion-btn>
              <h3 class="title-sm">What do I need to do to start selling ?</h3>

              <ion-icon name="chevron-down" aria-hidden="true"><GrFormDown /></ion-icon>
            </button>

            <div class="qna-content">
              <p class="body-md">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form.
              </p>
            </div>

          </div>
        </li>

        <li class="qna-item">
          <div class="qna-card" data-accordion>

            <button class="qna-btn" data-accordion-btn>
              <h3 class="title-sm">What happens when I receive an order ?</h3>

              <ion-icon name="chevron-down" aria-hidden="true"><GrFormDown /></ion-icon>
            </button>

            <div class="qna-content">
              <p class="body-md">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form.
              </p>
            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>
        <section class="section contact" aria-label="contact">
        <div class="container">

          <h2 class="headline-md section-title text-center">Have Question ? Get in touch!</h2>

          <p class="body-md section-text text-center">
            We are a huge marketplace dedicated to connecting great artists of all Metalink with their fans and unique
            token collectors!
          </p>

          <a href="#" class="btn btn-primary">
            <ion-icon name="call-outline" aria-hidden="true"><MdCall /></ion-icon>

            <span class="span">Contact us</span>
          </a>

        </div>
      </section>

      </>




  )
}

export default QA