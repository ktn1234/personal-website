import SocialLinks from "../components/SocialLinks";

function About(): JSX.Element {
  return (
    <section id="about" className="lg:flex lg:items-center lg:justify-evenly">
      <div>
        <div className="max-w-sm lg:max-w-max bg-secondary rounded-3xl ml-auto mr-auto md:ml-0 md:mr-0">
          <img
            className="opacity-20 rounded-3xl"
            src="images/me.jpg"
            alt="Kevin Nguyen"
          />
        </div>
      </div>
      <div className="lg:pl-20">
        <h1 className="pt-5 text-5xl">Kevin Nguyen</h1>
        <p className="text-2xl pt-3">
          Software Engineer at{" "}
          <span className="drop-shadow-tertiary-glow hover:underline hover:text-quaternary hover:animate-pulse">
            <a href="https://www.viasat.com/">Viasat</a>
          </span>
        </p>
        <p className="text-quaternary">
          I build scalable applications with a focus on performance and user
          experience.
        </p>
        <span className="inline-block py-5">
          <SocialLinks />
        </span>
        <p className="text-quaternary">
          Fascinated by computing at a young age, explored the jungle of the
          internet, and realized my passion for software development and
          automation. Since then, I have gotten the opportunity to build
          software for a{" "}
          <span className="font-bold drop-shadow-tertiary-glow hover:underline hover:text-tertiary hover:animate-pulse">
            <a target="_blank" href="https://www.q2.com/">
              fintech company
            </a>
          </span>
          , a{" "}
          <span className="font-bold drop-shadow-tertiary-glow hover:underline hover:text-tertiary hover:animate-pulse">
            <a target="_blank" href="https://www.getibble.com/">
              social media start-up
            </a>
          </span>
          , a{" "}
          <span className="font-bold drop-shadow-tertiary-glow hover:underline hover:text-tertiary hover:animate-pulse">
            <a target="_blank" href="https://bitsurf.network/">
              personal discovery engine startup
            </a>
          </span>
          , and a{" "}
          <span className="font-bold drop-shadow-tertiary-glow hover:underline hover:text-tertiary hover:animate-pulse">
            <a target="_blank" href="https://www.viasat.com/">
              satellite internet service provider
            </a>
          </span>
          .
        </p>
        <p className="pt-5 text-quaternary">
          My objective is to build robust applications with proficient workflows
          to bridge the gap between development and operations. I enjoy
          architecting solutions to get from development to production - taking
          into account scalability, reliability, and efficiency. I strive to
          optimize the entire software lifecycle for maximum productivity and
          customer satisfaction. I'm always looking for opportunities to learn
          and grow as a developer.
        </p>
        <p className="pt-5 text-quaternary">
          In my free time, I enjoy playing video games, rockclimbing, learning
          new technologies, discovering new music, learning another linguistic
          language, or planning my next destination to travel to.
        </p>
      </div>
    </section>
  );
}

export default About;
