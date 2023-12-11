import React, { memo } from "react";
import testimonial1 from "../../../img/testimonial-1.jpg";
import testimonial2 from "../../../img/testimonial-2.jpg";
import testimonial3 from "../../../img/testimonial-3.jpg";
import testimonial4 from "../../../img/testimonial-4.jpg";
import Carousel from "./Carousel";

function Testimonial() {
  const arrayOfTestimonialImg: { image: string }[] = [
    {
      image: testimonial1,
    },
    {
      image: testimonial2,
    },
    {
      image: testimonial3,
    },
    {
      image: testimonial4,
    },
  ];

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-3">Our Clients Say!</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          {/* <div className="owl-carousel testimonial-carousel wow"> */}
            <Carousel images={arrayOfTestimonialImg} />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default memo(Testimonial);
