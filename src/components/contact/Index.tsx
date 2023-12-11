import React, { memo, useEffect } from "react";
import Nav from "../home/Navbar/Nav";
import Header from "../about/Header";
import Search from "../home/search/Search";
import ContactUs from "./ContactUs";
import Footer from "../home/footer/footer";

function Index() {

  useEffect(()=>{
    document.title = "Contact"
  },[])

  return (
    <>
      <div className="container-xxl bg-white p-0">
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
        <header>
          <Header pageName="contact" />
        </header>
        
        <main>
          <section>
            <Search />
          </section>

          <section>
            <ContactUs />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default memo(Index);
