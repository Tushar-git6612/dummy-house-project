import { memo, useEffect } from "react";
import Nav from "../home/Navbar/Nav";
import Header from "../about/Header";
import Search from "../home/search/Search";
import Testimonial from "../home/testimonial/Testimonial";
import Footer from "../home/footer/footer";

function Index() {
   useEffect(()=>{
      document.title = "Testimonial"
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
      </div>
    </>
  );
}

export default memo(Index);
