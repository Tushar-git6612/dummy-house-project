import React, { memo, useEffect } from "react";
import Nav from "../home/Navbar/Nav";
import Header from "../about/Header";
import Search from "../home/search/Search";
import Propertytype from "../home/property type/Propertytype";
import Footer from "../home/footer/footer";

function Index() {
  useEffect(()=>{
    document.title = "Property Type"
  },[])


  return (
    <>
      <div className="container-xxl bg-white p-0">
        {/* navbar */}
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
        {/* navbar */}

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
      </div>
    </>
  );
}

export default memo(Index);
