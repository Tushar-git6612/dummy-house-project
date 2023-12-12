import React, { memo, useEffect } from "react";
import Nav from "../home/Navbar/Nav";
import Header from "../about/Header";
import Search from "../home/search/Search";
import Propertylist from "../home/property listing/Propertylist";
import Contact from "../home/contact/Contact";
import Footer from "../home/footer/footer";

function Index() {
  let num: number = 0;
  useEffect(() => {
    if (num < 1) {
      document.title = "Property List";
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
      <Header pageName="Property List" />
      {/* header */}

      {/* search */}
      <section>
        <Search />
      </section>
      {/* search */}

      {/* property Listing */}
      <section>
        <Propertylist />
      </section>
      {/* property Listing */}

      {/* contact agent */}
      <section>
        <Contact />
      </section>
      {/* contact agent */}

      {/* footer */}
      <footer>
        <Footer />
      </footer>
      {/* footer */}
    </>
  );
}

export default memo(Index);
