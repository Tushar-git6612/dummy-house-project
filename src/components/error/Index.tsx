import { memo, useEffect } from "react";
import Nav from "../home/Navbar/Nav";
import Header from "../about/Header";
import Error from "./Error";
import Footer from "../home/footer/footer";
import Search from "../home/search/Search";

function Index() {
  useEffect(() => {
    document.title = "Error 404";
  }, []);

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
        <header>
          <Header pageName="404 Error" />
        </header>
        {/* header */}
        <main>

         {/* search */}
         <section>
            <Search/>
         </section>
         {/* search */}

          {/* error 404 */}
          <section>
            <Error />
          </section>
          {/* error 404 */}
        </main>

        {/* footer */}
        <Footer />
        {/* footer */}
      </div>
    </>
  );
}

export default memo(Index);
