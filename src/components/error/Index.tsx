import { memo, useEffect } from "react";
// import Nav from "../home/Navbar/Nav";
import Header from "../about/Header";
import Error from "./Error";
import Footer from "../home/footer/footer";
import Search from "../home/search/Search";

function Index() {
  let num: number = 0;
  useEffect(() => {
    if (num < 1) {
      document.title = "Error";
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
      <header>
        <Header pageName="404 Error" />
      </header>
      {/* header */}
      <main>
        {/* search */}
        <section>
          <Search />
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
    </>
  );
}

export default memo(Index);
