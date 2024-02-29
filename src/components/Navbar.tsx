import { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

interface Link {
  title: string;
  url: string;
}

function NavbarDesktop(): JSX.Element {
  const [useMobile, setUseMobile] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      // If the window width is less than 768px, set useMobile to true
      // Using 768px as the breakpoint for mobile based off default values in Tailwind CSS (https://tailwindcss.com/docs/responsive-design)
      if (window.innerWidth < 768) {
        setUseMobile(true);
      } else {
        setShowModal(false);
        setUseMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const links: Link[] = [
    {
      title: "About",
      url: "#about",
    },
    {
      title: "Experience",
      url: "#experience",
    },
    {
      title: "Projects",
      url: "#projects",
    },
    {
      title: "Technologies",
      url: "#technologies",
    },
  ];

  return (
    <header>
      <nav className="p-5 flex justify-between items-center">
        <div>
          <span className="cursor-pointer">
            <p className="text-xl inline drop-shadow-tertiary-glow animate-pulse">
              {"> kevdev"}
            </p>
          </span>
        </div>
        {useMobile && (
          <div
            className="flex cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <FaDollarSign className="hover:drop-shadow-tertiary-glow hover:animate-pulse" />
          </div>
        )}
        {!useMobile && (
          <div>
            <ul className="flex">
              {links.map((link: Link, index: number) => (
                <li
                  className="pl-5 hover:underline hover:drop-shadow-tertiary-glow hover:animate-pulse"
                  key={index}
                >
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {showModal && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-primary z-50"
            onClick={() => setShowModal(false)}
          >
            <div className="fixed top-0 left-0 h-full bg-primary z-50">
              <ul className="pt-10 pl-10">
                <p className="pb-5 text-2xl drop-shadow-tertiary-glow animate-pulse cursor-pointer">
                  {"> kevdev"}
                </p>

                {links.map((link: Link, index: number) => (
                  <li
                    className="pb-5 hover:underline hover:drop-shadow-tertiary-glow hover:animate-pulse"
                    key={index}
                  >
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
                <SocialLinks />
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavbarDesktop;
