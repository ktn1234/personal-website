import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillSuitcaseLgFill } from "react-icons/bs";

interface SocialLink {
  title: string;
  ariaLabel: string;
  url: string;
  icon: JSX.Element;
}

// Icon color uses the theme's theme.colors.tertiary value in tail
const socialLinks: SocialLink[] = [
  {
    title: "Github",
    ariaLabel: "Github",
    url: "https://github.com/ktn1234",
    icon: (
      <FaGithub
        className="hover:animate-pulse hover:fill-quaternary hover:drop-shadow-quaternary-glow"
        color="#3AD305"
        cursor="pointer"
        size={22}
      />
    ),
  },
  {
    title: "LinkedIn",
    ariaLabel: "LinkedIn",
    url: "https://www.linkedin.com/in/kevinnguyen1234/",
    icon: (
      <FaLinkedinIn
        className="hover:animate-pulse hover:fill-quaternary hover:drop-shadow-quaternary-glow"
        color="#3AD305"
        cursor="pointer"
        size={22}
      />
    ),
  },
  {
    title: "Email",
    ariaLabel: "Email",
    url: "mailto:ktn1234@yahoo.com",
    icon: (
      <HiOutlineMail
        className="hover:animate-pulse hover:fill-quaternary hover:drop-shadow-quaternary-glow"
        color="#3AD305"
        cursor="pointer"
        size={22}
      />
    ),
  },
  {
    title: "Resume",
    ariaLabel: "Resume",
    url: "https://drive.google.com/file/d/1qRxhm3iu8-s4G1b3-USHA8lGYR9U9xq8/view?usp=sharing&usp=embed_facebook",
    icon: (
      <BsFillSuitcaseLgFill
        className="hover:animate-pulse hover:fill-quaternary hover:drop-shadow-quaternary-glow"
        color="#3AD305"
        cursor="pointer"
        size={22}
      />
    ),
  },
];

function SocialLinks(): JSX.Element {
  return (
    <div className="flex justify-center items-center gap-5">
      {socialLinks.map((link: SocialLink, index: number) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          aria-label={link.ariaLabel}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
