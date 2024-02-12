import NavbarDesktop from "./components/Navbar";
import UIContainer from "./components/Container/UIContainer";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Technologies from "./sections/Technologies";
// import Projects from "./sections/Projects";
import Footer from "./components/Footer";

function App() {
  const pages = [
    <About />,
    <Experience />,
    <Technologies />,
    // <Projects />
  ];

  return (
    <>
      <NavbarDesktop />
      <UIContainer>
        {pages.map((page, index) => (
          <div key={index}>
            <div className="mb-5">{page}</div>
          </div>
        ))}
      </UIContainer>
      <Footer />
    </>
  );
}

export default App;
