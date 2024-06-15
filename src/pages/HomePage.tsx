import Navbar from "../components/Navbar";
import UIContainer from "../components/Container/UIContainer";
import Footer from "../components/Footer";

import About from "../sections/About";
import Experience from "../sections/Experience";
import Technologies from "../sections/Technologies";
import Projects from "../sections/Projects";

function HomePage() {
  const sections = [<About />, <Experience />, <Projects />, <Technologies />];

  return (
    <>
      <Navbar />
      <UIContainer>
        {sections.map((section, index) => (
          <section key={index} className="mb-5">
            {section}
          </section>
        ))}
      </UIContainer>
      <Footer />
    </>
  );
}

export default HomePage;
