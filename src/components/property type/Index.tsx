import React, { memo, useEffect } from "react";
import Nav from "../home/Navbar/Nav";
import Header from "../about/Header";
import Search from "../home/search/Search";
import Propertytype from "../home/property type/Propertytype";
import Footer from "../home/footer/footer";

function Index() {
  let num: number = 0;
  useEffect(() => {
    if (num < 1) {
      document.title = "Property Type";
      const property$ = document.querySelector(".propertyLink");
      const page$ = document.querySelector(".pageLink");
      if (
        window.location.href == `http://localhost:3000/PropertyList` ||
        window.location.href == `http://localhost:3000/PropertyType` ||
        window.location.href == `http://localhost:3000/PropertyAgent`
      ) {
        if (!property$?.classList.contains("active")) {
          property$?.classList.add("active");
          page$?.classList.remove("active");
        }
      } else if (
        window.location.href == `http://localhost:3000/Error` ||
        window.location.href == `http://localhost:3000/Testimonial`
      ) {
        if (!page$?.classList.contains("active")) {
          page$?.classList.add("active");
        }
      } else {
        property$?.classList.remove("active");
        page$?.classList.remove("active");
      }
      num++;
    }
    // eslint-disable-next-line
  }, [document.title, window.location.href]);

  return (
    <>
      {/* header */}
      <Header pageName="Property Type" />
      {/* header */}
      <main>
        {/* Search */}
        <section>
          <Search />
        </section>
        {/* Property type */}
        <section>
          <Propertytype />
        </section>
        {/* Property type */}
      </main>
      {/* footer */}
      <footer>
        <Footer />
      </footer>
      {/* footer */}
    </>
  );
}

export default memo(Index);
