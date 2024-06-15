import SocialLinks from "./SocialLinks";

function Footer(): JSX.Element {
  return (
    <footer className="flex flex-col justify-center items-center mb-5">
      <SocialLinks />
      <p className="text-quaternary text-center pt-2">
        Built with{" "}
        <span className="drop-shadow-tertiary-glow hover:underline hover:text-tertiary hover:animate-pulse">
          <a href="https://react.dev/">React</a>
        </span>{" "}
        and{" "}
        <span className="drop-shadow-tertiary-glow hover:underline hover:text-tertiary hover:animate-pulse">
          <a href="https://tailwindcss.com/">Tailwind CSS</a>
        </span>
        . Deployed with{" "}
        <span className="drop-shadow-tertiary-glow hover:underline hover:text-tertiary hover:animate-pulse">
          <a href="https://vercel.com/">Vercel</a>
        </span>
      </p>
      <p className="text-tertiary text-center">
        Made with ❤️ by Kevin Nguyen | 2024
      </p>
    </footer>
  );
}

export default Footer;
