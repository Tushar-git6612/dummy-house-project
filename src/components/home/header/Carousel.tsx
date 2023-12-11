import { PureComponent } from "react";
import Slider from "react-slick";
import carousal1 from "../../../img/carousel-1.jpg";
import carousal2 from "../../../img/carousel-2.jpg";

export default class AdaptiveHeight extends PureComponent {
  render() {
    var settings = {
      //  className: "",
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="owl-carousel-item" key={0}>
            <img className="img-fluid" src={carousal1} alt="" />
          </div>
          <div className="owl-carousel-item" key={1}>
            <img className="img-fluid" src={carousal2} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
