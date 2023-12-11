import React, { memo, useEffect } from "react";
import Nav from "../home/Navbar/Nav";
import Header from "../about/Header";
import Search from "../home/search/Search";
import Propertylist from "../home/property listing/Propertylist";
import Contact from "../home/contact/Contact";
import Footer from "../home/footer/footer";

function Index() {
  useEffect(() => {
    document.title = "Property List";
  }, []);

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
      </div>
    </>
  );
}

export default memo(Index);
