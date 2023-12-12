import { memo, useEffect } from "react";
// import Nav from "../home/Navbar/Nav";
import Header from "./Header";
import Search from "../home/search/Search";
import About from "../home/about/About";
import Contact from "../home/contact/Contact";
import Agent from "../home/property agent/Agent";
import Footer from "../home/footer/footer";

function Index() {

  let num: number = 0;
  useEffect(() => {
    if (num < 1) {
      document.title = "About";
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
        {/* header */}
        <header>
          <Header pageName = "about" />
        </header>
        {/* header */}
        <main>
          {/* search */}
          <section>
            <Search />
          </section>
          {/* search */}

          {/* About */}
          <section>
            <About />
          </section>
          {/* About */}

          {/* contact */}
          <section>
            <Contact />
          </section>
          {/* contact */}

          {/* agent */}
          <section>
            <Agent />
          </section>
          {/* agent */}
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
