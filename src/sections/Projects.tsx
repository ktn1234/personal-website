import { FaGithub } from "react-icons/fa";
import TextButton from "../components/TextButton";

interface Project {
  title: string;
  description: string;
  date: string;
  image: string;
  alt: string;
  link?: string;
  linkIcon?: JSX.Element;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Invoice Automation",
    description:
      "Automated invoice processing tool that extracts data from invoices and logs them into a business management system. This tool was built to save time and reduce human error in the process of repetitively logging invoices.",
    date: "2023",
    image: "images/invoice-automation/demo-blurred.png",
    alt: "Invoice Automation",
    technologies: ["Python", "Selenium"],
  },
  {
    title: "Spidy",
    description:
      "Web scraping tool that scrapes data from websites, downloads the images, and saves them locally. This tool was built to automate the process of collecting image data from websites.",
    date: "2023",
    image: "images/spidy/demo.png",
    alt: "Spidy",
    link: "https://github.com/ktn1234/spidy",
    linkIcon: <FaGithub />,
    technologies: ["Node.js", "Bun"],
  },
  {
    title: "ChatGPT CLI",
    description:
      "Command line interface for OpenAI's GPT-3. This CLI allows users to interact with GPT-3 in their terminal (using bash, zsh, powershell, command prompt, or Node.js). Users can generate text, summarize articles, and more.",
    date: "2023",
    image: "images/chatgpt-cli/demo-blurred.png",
    alt: "ChatGPT CLI",
    link: "https://github.com/ktn1234/chatgpt-cli",
    linkIcon: <FaGithub />,
    technologies: ["OpenAI", "Node.js", "Shell", "Powershell", "Batch"],
  },
  {
    title: "SPLIT",
    description:
      "Blockchain web application game built off of Solana Blockchain. The rules are simple: Split or Steal. Based off of the prisoners' dilemma, players can choose to split or steal the pot. If both players choose to split, they split the pot. If one player chooses to steal, they take the entire pot. If both players choose to steal, they both lose the entire pot.",
    date: "2021",
    image: "images/split/split-gameplay.png",
    alt: "Split Gameplay",
    technologies: ["Solana", "Next.js", "Typescript", "Chakra UI", "Socket.io"],
  },
  {
    title: "Crypto Alerter",
    description:
      "Script deployed as a cron job on a Raspberry Pi that sends alerts to Slack every hour with personal selected cryptocurrency prices.",
    date: "2021",
    image: "images/crypto-alerter/demo-blurred.png",
    alt: "Crypto Alerter",
    link: "https://github.com/ktn1234/crypto_alerter",
    linkIcon: <FaGithub />,
    technologies: ["Node.js", "Messari API", "Raspberry Pi"],
  },
  {
    title: "identaxy",
    description:
      "Mobile app for UT Astrophysics department that allows authenticated users to verify if images are real galaxies. This crowdsourced tagging was used to enhance their machine learning model training, streamlining their processes and paving the way for future applications within the department.",
    alt: "identaxy Logo",
    image: "images/identaxy/identaxy-logo.png",
    date: "2019",
    link: "https://github.com/lexicepak/identaxy",
    linkIcon: <FaGithub />,
    technologies: ["Swift", "XCode", "Firebase"],
  },
];

function Projects() {
  return (
    <section id="projects">
      <h1 className="text-3xl drop-shadow-tertiary-glow text-center lg:text-left">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5 gap-5">
        {projects.map((project: Project, index: number) => (
          <div
            key={index}
            className="block p-6 bg-primary border border-secondary rounded-lg shadow text-tertiary hover:drop-shadow-tertiary-glow"
          >
            <a target="_blank" href={project.link}>
              <div className="flex justify-between items-center mb-5">
                <p>{project.date}</p>
                {project.link && project.linkIcon && project.linkIcon}
              </div>
              <img
                className="rounded-lg h-48 w-full object-cover"
                src={project.image}
                alt={project.alt}
              />
              <div>
                <h5 className="py-2 text-2xl font-bold tracking-tight text-center">
                  {project.title}
                </h5>
                <p className="text-quaternary">{project.description}</p>
                <div className="pt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <TextButton key={index} text={tech} />
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
