import { memo, useEffect } from "react";
import Nav from "./Navbar/Nav";
import Header from "./header/Header";
import Search from "./search/Search";
import Propertytype from "./property type/Propertytype";
import About from "./about/About";
import Propertylist from "./property listing/Propertylist";
import Contact from "./contact/Contact";
import Agent from "./property agent/Agent";
import Testimonial from "./testimonial/Testimonial";
import Footer from "./footer/footer";
// import BackOnTop from "../upbtn/Index";

function Index() {
  let num: number = 0;
  useEffect(() => {
    if (num < 1) {
      document.title = "Home";
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
      {/* header start */}
      <header>
        <Header />
      </header>
      {/* header end */}
      <main>
        {/* search start */}
        <section>
          <Search />
        </section>
        {/* search end */}

        {/* property types */}
        <section>
          <Propertytype />
        </section>
        {/* property types */}

        {/* about start */}
        <section>
          <About />
        </section>
        {/* about end */}

        {/* property list start */}
        <section>
          <Propertylist />
        </section>
        {/* property list start */}

        {/* contact start */}
        <section>
          <Contact />
        </section>
        {/* contact start */}

        {/* property agent */}
        <section>
          <Agent />
        </section>
        {/* property agent */}

        {/* Testimonial start */}
        <section>
          <Testimonial />
        </section>
        {/* Testimonial end */}
      </main>

      {/* footer start */}
      <footer>
        <Footer />
      </footer>
      {/* footer end */}
      {/* <BackOnTop/> */}
    </>
  );
}

export default memo(Index);
