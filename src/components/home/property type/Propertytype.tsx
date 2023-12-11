import { memo } from "react";
import { Link } from "react-router-dom";
import apartment from "../../../img/icon-apartment.png";
import villa from "../../../img/icon-villa.png";
import home from "../../../img/icon-house.png";
import housing from "../../../img/icon-housing.png";
import building from "../../../img/icon-building.png";
import neighborhood from "../../../img/icon-neighborhood.png";
import condominium from "../../../img/icon-condominium.png";
import luxury from "../../../img/icon-luxury.png";

function Propertytype() {
  const propertyArticles: { type: string; image: string }[] = [
    {
      type: "appartment",
      image: apartment,
    },
    {
      type: "villa",
      image: villa,
    },
    {
      type: "home",
      image: home,
    },
    {
      type: "office",
      image: housing,
    },
    {
      type: "building",
      image: building,
    },
    {
      type: "townhouse",
      image: neighborhood,
    },
    {
      type: "shop",
      image: condominium,
    },
    {
      type: "garage",
      image: luxury,
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
            <h1 className="mb-3">Property Types</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            {propertyArticles?.map(
              (item: { type: string; image: string }, index: number) => {
                return (
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                    key={index}
                  >
                    <Link
                      className="cat-item d-block bg-light text-center rounded p-3"
                      to=""
                    >
                      <div className="rounded p-4">
                        <div className="icon mb-3">
                          <img
                            className="img-fluid"
                            src={item.image}
                            alt="Icon"
                          />
                        </div>
                        <h6>{item.type}</h6>
                        <span>123 Properties</span>
                      </div>
                    </Link>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Propertytype);
