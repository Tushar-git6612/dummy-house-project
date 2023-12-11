import React, { memo } from "react";
import { Link } from "react-router-dom";
import team1 from "../../../img/team-1.jpg";
import team2 from "../../../img/team-2.jpg";
import team3 from "../../../img/team-3.jpg";
import team4 from "../../../img/team-4.jpg";

function Agent() {
  const arrayOfAgentImg: { image: string }[] = [
    {
      image: team1,
    },
    {
      image: team2,
    },
    {
      image: team3,
    },
    {
      image: team4,
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
            <h1 className="mb-3">Property Agents</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            {arrayOfAgentImg.map((item, index) => {
              return (
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                  key={index}
                >
                  <div className="team-item rounded overflow-hidden">
                    <div className="position-relative">
                      <img className="img-fluid" src={item.image} alt="" />
                      <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                        <Link className="btn btn-square mx-1" to="">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="btn btn-square mx-1" to="">
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="btn btn-square mx-1" to="">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="text-center p-4 mt-3">
                      <h5 className="fw-bold mb-0">Full Name</h5>
                      <small>Designation</small>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Agent);
