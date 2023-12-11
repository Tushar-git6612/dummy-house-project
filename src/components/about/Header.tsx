import React, { memo } from "react";
import { Link } from "react-router-dom";
import headerImg from "../../img/header.jpg";

function Header(props: { pageName: string }) {
  return (
    <>
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 p-5 mt-lg-5">
            <h1 className="display-5 animated fadeIn mb-4 text-capitalize">
              {props.pageName === "contact" || props.pageName === "about"
                ? `${props.pageName} us`
                : props.pageName}
            </h1>
            <nav aria-label="breadcrumb animated fadeIn">
              <ol className="breadcrumb text-uppercase">
                <li className="breadcrumb-item">
                  <Link to="">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Pages</Link>
                </li>
                <li
                  className="breadcrumb-item text-body active"
                  aria-current="page"
                >
                  {props.pageName}
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-md-6 animated fadeIn">
            <img className="img-fluid" src={headerImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
