interface Link {
  title: string;
  url: string;
}

function NavbarDesktop(): JSX.Element {
  const links: Link[] = [
    {
      title: "About",
      url: "#about",
    },
    {
      title: "Experience",
      url: "#experience",
    },
    // {
    //   title: "Projects",
    //   url: "#projects",
    // },
    {
      title: "Technologies",
      url: "#technologies",
    },
  ];

  return (
    <header>
      <nav className="px-5 pt-5 md:flex md:justify-between md:items-center">
        <div>
          <span className="cursor-pointer">
            <p className="text-xl inline"> {"> kevdev"}</p>
          </span>
        </div>
        <div>
          <ul className="flex invisible md:visible">
            {links.map((link: Link, index: number) => (
              <li className="pl-5" key={index}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavbarDesktop;
