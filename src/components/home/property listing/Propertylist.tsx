import { memo } from "react";
import { Link } from "react-router-dom";
import property1 from "../../../img/property-1.jpg";
import property2 from "../../../img/property-2.jpg";
import property3 from "../../../img/property-3.jpg";
import property4 from "../../../img/property-4.jpg";
import property5 from "../../../img/property-5.jpg";
import property6 from "../../../img/property-6.jpg";

function Propertylist() {
  const propertyArticle: { type: string; list: string; image: string }[] = [
    {
      type: "for sell",
      list: "appartment",
      image: property1,
    },
    {
      type: "for rent",
      list: "villa",
      image: property2,
    },
    {
      type: "for sell",
      list: "office",
      image: property3,
    },
    {
      type: "for rent",
      list: "building",
      image: property4,
    },
    {
      type: "for sell",
      list: "home",
      image: property5,
    },
    {
      type: "for rent",
      list: "shop",
      image: property6,
    },
  ];

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="text-start mx-auto mb-5 wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <h1 className="mb-3">Property Listing</h1>
                <p>
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit diam justo sed
                  rebum.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 text-start text-lg-end wow slideInRight"
              data-wow-delay="0.1s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                <li className="nav-item me-2">
                  <a
                    className="btn btn-outline-primary active"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    Featured
                  </a>
                </li>
                <li className="nav-item me-2">
                  <a
                    className="btn btn-outline-primary"
                    data-bs-toggle="pill"
                    href="#tab-2"
                  >
                    For Sell
                  </a>
                </li>
                <li className="nav-item me-0">
                  <a
                    className="btn btn-outline-primary"
                    data-bs-toggle="pill"
                    href="#tab-3"
                  >
                    For Rent
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {propertyArticle.map((item, index) => {
                  return (
                    <div
                      className="col-lg-4 col-md-6 wow fadeInUp"
                      data-wow-delay="0.1s"
                      key={index}
                    >
                      <div className="property-item rounded overflow-hidden">
                        <div className="position-relative overflow-hidden">
                          <Link to="">
                            <img
                              className="img-fluid"
                              src={item.image}
                              alt=""
                            />
                          </Link>
                          <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                            {item.type}
                          </div>
                          <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                            {item.list}
                          </div>
                        </div>
                        <div className="p-4 pb-0">
                          <h5 className="text-primary mb-3">$12,345</h5>
                          <Link className="d-block h5 mb-2" to="">
                            Golden Urban House For Sell
                          </Link>
                          <p>
                            <i className="fa fa-map-marker-alt text-primary me-2"></i>
                            123 Street, New York, USA
                          </p>
                        </div>
                        <div className="d-flex border-top">
                          <small className="flex-fill text-center border-end py-2">
                            <i className="fa fa-ruler-combined text-primary me-2"></i>
                            1000 Sqft
                          </small>
                          <small className="flex-fill text-center border-end py-2">
                            <i className="fa fa-bed text-primary me-2"></i>3 Bed
                          </small>
                          <small className="flex-fill text-center py-2">
                            <i className="fa fa-bath text-primary me-2"></i>2
                            Bath
                          </small>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="col-12 text-center">
                  <Link className="btn btn-primary py-3 px-5" to="">
                    Browse More Property
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Propertylist);
