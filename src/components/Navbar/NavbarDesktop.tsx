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
      <nav className="pl-8 pr-8 pt-5 flex justify-between items-center">
        <div>
          <span className="cursor-pointer">
            <p className="text-xl inline"> {"> kevdev"}</p>
          </span>
        </div>
        <div>
          <ul className="flex">
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
