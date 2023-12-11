import { memo, useEffect } from "react";
import Nav from "../home/Navbar/Nav";
import Header from "./Header";
import Search from "../home/search/Search";
import About from "../home/about/About";
import Contact from "../home/contact/Contact";
import Agent from "../home/property agent/Agent";
import Footer from "../home/footer/footer";

function Index() {

  useEffect(()=>{
    document.title = "About"
  },[])

  return (
    <>
      <div className="container-xxl bg-white p-0">
        {/* nav */}
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
        {/* nav */}

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
      </div>
    </>
  );
}

export default memo(Index);
