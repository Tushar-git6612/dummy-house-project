import React, { PureComponent } from "react";
import Slider from "react-slick";

type propsTypes = {
  images: { image: string }[];
};

export default class PreviousNextMethods extends PureComponent<propsTypes> {
  slider: any;
  constructor(props: propsTypes) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  prev() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 2,
      slidesToScroll: 1,
      swipeToSlide: true,
      pauseOnHover: true,
      arrows: false,
      initialSlide: 0,
      touchMove: true,
      focusOnSelect: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            arrows: false,
            draggable: true,
            swipeToSlide: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {this?.props?.images.map((item, index) => {
            return (
              <div
                className="testimonial-item bg-light rounded p-3"
                key={index}
                style={{ cursor: "pointer" }}
              >
                <div className="bg-white border rounded p-4">
                  <p>
                    Tempor stet labore dolor clita stet diam amet ipsum dolor
                    duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem
                    amet est kasd kasd erat eos
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded"
                      src={item.image}
                      style={{ width: "45px", height: "45px" }}
                      alt=""
                    />
                    <div className="ps-3">
                      <h6 className="fw-bold mb-1">Client Name</h6>
                      <small>Profession</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="d-md-flex d-none justify-content-center align-items-center mt-4">
          <div className="owl-prev mx-2 d-flex justify-content-center align-items-center" style={{height:"30px", width:"50px", backgroundColor:"#00B98E", borderColor:"#00B98E", borderRadius:"50px " , cursor:"pointer"}} onClick={()=> this.next()}>
            <i className="bi bi-arrow-left "  style={{color:"white"}} ></i>
          </div>
          <div className="owl-next mx-2 d-flex justify-content-center align-items-center" style={{height:"30px", width:"50px", backgroundColor:"#00B98E", borderColor:"#00B98E", borderRadius:"50px " , cursor:"pointer"}} onClick={()=> this.prev()}>
            <i className="bi bi-arrow-right " style={{color:"white"}}  ></i>
          </div>
        </div>
      </div>
    );
  }
}