import React, { memo, useEffect, useState } from "react";
import iconDeal from "../../../img/icon-deal.png";
import { Link, NavLink } from "react-router-dom";

type propstypes = {
  logoText: string;
  home: string;
  about: string;
  property: string;
  propertyList: string;
  propertyType: string;
  propertyAgent: string;
  testimonial: string;
  page: string;
  error: string;
  contact: string;
  addProperty: string;
};

function Nav(props: propstypes) {
  const [navPropertyActiveColor, setNavPropertyActiveColor] = useState<
    string | undefined
  >("");
  const [navPageActiveColor, setNavPageActiveColor] = useState<
    string | undefined
  >("");

  let num: number = 0;
  useEffect(() => {
    if (num < 1) {
      if (
        window.location.href === `http://localhost:3000/PropertyList` ||
        window.location.href === `http://localhost:3000/PropertyType` ||
        window.location.href === `http://localhost:3000/PropertyAgent`
      ) {
        setNavPropertyActiveColor("#00B98E");
      } else if (
        window.location.href === `http://localhost:3000/Error` ||
        window.location.href === `http://localhost:3000/Testimonial`
      ) {
        setNavPageActiveColor("#00B98E");
      }
      num++;
    }
  }, []);

  const clickHandle = (e: any) => {
    const propertySubList = document.querySelector(".dropdown-menu");
    const pageSubList = document.querySelector(".pagedropdown");
    e.target.textContent === "pages"
      ? pageSubList?.classList.toggle("dropdownvisible")
      : propertySubList?.classList.toggle("dropdownvisible");
  };

  return (
    <>
      <div className="container-fluid nav-bar bg-transparent">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4 ">
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center text-center"
          >
            <div className="icon p-2 me-2">
              <img
                className="img-fluid"
                src={iconDeal}
                alt="Icon"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <h1 className="m-0 text-primary text-capitalize">
              {props.logoText}
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <NavLink to="/" className="nav-item nav-link">
                {props.home}
              </NavLink>
              <NavLink to="/About" className="nav-item nav-link">
                {props.about}
              </NavLink>
              <div className="nav-item  dropdown">
                <Link
                  to=""
                  style={{ color: `${navPropertyActiveColor}` }}
                  className={`nav-link Link dropdown-toggle `}
                  data-bs-toggle="dropdown"
                  onClick={clickHandle}
                >
                  {props.property}
                </Link>
                <div className="dropdown-menu rounded-0 m-0 ">
                  <NavLink
                    to="/PropertyList"
                    className="dropdown-item text-capitalize"
                  >
                    {props.propertyList}
                  </NavLink>
                  <NavLink
                    to="/PropertyType"
                    className="dropdown-item text-capitalize"
                  >
                    {props.propertyType}
                  </NavLink>
                  <NavLink
                    to="/PropertyAgent"
                    className="dropdown-item text-capitalize"
                  >
                    {props.propertyAgent}
                  </NavLink>
                </div>
              </div>
              <div className="nav-item dropdown ">
                <Link
                  to=""
                  style={{ color: `${navPageActiveColor}` }}
                  className="nav-link Link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  onClick={clickHandle}
                >
                  {props.page}
                </Link>
                <div className="dropdown-menu pagedropdown rounded-0 m-0">
                  <NavLink
                    to="/Testimonial"
                    className="dropdown-item text-capitalize"
                  >
                    {props.testimonial}
                  </NavLink>
                  <NavLink
                    to="/Error"
                    className="dropdown-item text-capitalize"
                  >
                    {props.error}
                  </NavLink>
                </div>
              </div>
              <NavLink to="/Contact" className="nav-item nav-link">
                {props.contact}
              </NavLink>
            </div>
            <Link
              to="/"
              className="btn btn-primary px-3 d-none d-lg-flex text-capitalize"
            >
              {props.addProperty}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default memo(Nav);
