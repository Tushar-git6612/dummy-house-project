import { memo, useEffect } from "react";
import Header from "../about/Header";
import Search from "../home/search/Search";
import Testimonial from "../home/testimonial/Testimonial";
import Footer from "../home/footer/footer";

function Index() {
  let num: number = 0;
  useEffect(() => {
    if (num < 1) {
      document.title = "Testimonial";
      const property$ = document.querySelector(".propertyLink");
      const page$ = document.querySelector(".pageLink");
      if (
        window.location.href == `http://localhost:3000/PropertyList` ||
        window.location.href == `http://localhost:3000/PropertyType` ||
        window.location.href == `http://localhost:3000/PropertyAgent`
      ) {
        if (!property$?.classList.contains("active")) {
          property$?.classList.add("active");
        }
      } else if (
        window.location.href == `http://localhost:3000/Error` ||
        window.location.href == `http://localhost:3000/Testimonial`
      ) {
        if (!page$?.classList.contains("active")) {
          page$?.classList.add("active");
          property$?.classList.remove("active");
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
      <Header pageName="Testimonial" />
      {/* header */}
      <main>
        {/* search */}
        <Search />
        {/* search */}

        {/* Testimonial */}
        <Testimonial />
        {/* Testimonial */}
      </main>
      {/* footer */}
      <Footer />
      {/* footer */}
    </>
  );
}

export default memo(Index);
