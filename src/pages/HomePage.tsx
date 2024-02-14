import NavbarDesktop from "../components/Navbar";
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
      <NavbarDesktop />
      <UIContainer>
        {sections.map((section, index) => (
          <div key={index}>
            <div className="mb-5">{section}</div>
          </div>
        ))}
      </UIContainer>
      <Footer />
    </>
  );
}

export default HomePage;
