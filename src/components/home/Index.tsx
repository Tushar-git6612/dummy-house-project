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

  useEffect(()=>{
    document.title = "Home"
  },[])

  return (
    <>
      <div className="container-xxl bg-white p-0">
        {/* Nav start */}
          <Nav
            logoText="makaan"
            home="home"
            about="about"
            property="property"
            propertyList="property list"
            propertyType="property type"
            propertyAgent="property agent"
            page="pages"
            testimonial="Testimonial"
            error="404 error"
            contact="contact"
            addProperty="add property"
          />
        {/* Nav end */}

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
      </div>
    </>
  );
}

export default memo(Index);
