import SocialLinks from "./SocialLinks";

function Footer(): JSX.Element {
  return (
    <div className="mb-5">
      <footer className="flex flex-wrap justify-center items-center">
        <div>
          <SocialLinks />
          <div>
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
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
