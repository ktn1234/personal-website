import ExperienceTime from "../components/ExperienceTime";
import TextButton from "../components/TextButton";
import { uniqueTotalTimeString } from "../utils/time";

interface Job {
  company: string;
  title: string;
  startTime: Date;
  endTime: Date;
  description: string[];
  link: string;
  technologies: string[];
}

const today = new Date();
const jobs: Job[] = [
  {
    company: "Viasat",
    title: "Software Engineer",
    startTime: new Date(2020, 7), // August 2020
    endTime: today, // Present
    description: [
      "Lead the development of a portal and an API for DDI (DNS, DHCP, and IPAM) services to provide a self-service interface for internal employees to manage their own domains and IP addresses",
      "Built an internal self-service client for Viasat's Configuration Management Database (CMDB) to provide a more efficient way to manage assets",
      "Optimized image pipelines that produced secure internal images for Viasat's infrastructure",
      "Integrated DevOps practices into the development lifecycle, including automation for deployment of infrastructure resources, improving CI/CD pipelines, and providing support for internal employees",
      "Assisted in the development of an internal ChatGPT chatbot and the backend services to help assist internal employees with their job tasks",
    ],
    link: "https://www.viasat.com/",
    technologies: [
      "AWS",
      "Ansible",
      "Jenkins",
      "Openstack",
      "VMware",
      "Python",
      "Shell",
      "Docker",
      "Kubernetes",
      "Typescript",
      "Node.js",
      "REST",
      "Html",
      "CSS",
      "Javascript",
      "Vue.js",
      "Github Actions",
      "Go",
      "gRPC",
      "React",
      "Azure",
    ],
  },
  {
    company: "Bitsurf",
    title: "Co-Founder Software Engineer",
    startTime: new Date(2020, 11), // December 2020
    endTime: today, // Present
    description: [
      "Led the development of Bitsurf's platform and the backend systems to support it including authentication, OAuth2.0, API, database, email integration, payment integration, analytics, SEO, logging, monitoring, alerts, and security",
      "Architected and maintained the infrastructure for Bitsurf's platform",
      "Assisted with the development of Bitsurf's Discovery Engine",
    ],
    link: "https://bitsurf.network/",
    technologies: [
      "Typescript",
      "Node.js",
      "React",
      "MaterialUI",
      "Express.js",
      "GraphQL",
      "Apollo",
      "MongoDB",
      "Neo4j",
      "Docker",
      "Terraform",
      "AWS",
      "Heroku",
      "Redis",
      "Crypto",
      "Stripe",
      "Sendgrid",
      "PWA",
    ],
  },
  {
    company: "ibble",
    title: "Software Engineer Intern",
    startTime: new Date(2019, 11), // December 2019
    endTime: new Date(2020, 7), // August 2020
    description: [
      "Built ibble's underlying push notification delivery service foundation to provide more user engagement with ibbl's mobile application",
      "Worked on reporting automation in order to get user statistics to further analyze how users were interacting with ibble's mobile application",
      "Migrated and integrated old back-end legacy code into new code repository, creating a more modular code base",
      "Created functional/unit tests for every feature in a test driven development environment",
    ],
    link: "https://www.getibble.com/",
    technologies: ["Typescript", "Node.js", "Jest", "GCP", "Firebase", "NoSQL"],
  },
  {
    company: "Q2",
    title: "IT Intern",
    startTime: new Date(2019, 4), // May 2019
    endTime: new Date(2019, 7), // August 2019
    description: [
      "Automated the provisioning process for new Windows machines, reducing the steps it took from 65 to 20 steps, with Powershell",
      "Automated the provisioning process for new Mac machines, reducing the steps it took from 37 to 14 steps, with shell scripting",
      "Provided internal employees customer support by troubleshooting hardware / software related issues, closing out 137 Salesforce cases",
    ],
    link: "https://www.q2.com/",
    technologies: ["Shell", "Powershell"],
  },
];

function Experience(): JSX.Element {
  return (
    <section id="experience">
      <h1 className="flex flex-col md:flex-row md:items-center text-3xl drop-shadow-tertiary-glow text-center md:text-left">
        <span>Experience</span>
        <div className="md:ml-2 text-lg text-quaternary">
          {`(${uniqueTotalTimeString(
            jobs.map((job) => ({
              startTime: job.startTime,
              endTime: job.endTime,
            }))
          )} years)`}
        </div>
      </h1>
      <div>
        {jobs.map((job: Job, index: number) => (
          <div key={index} className="pt-5">
            <h3 className="text-2xl">
              {job.title} at{" "}
              <span className="font-bold drop-shadow-tertiary-glow hover:underline hover:text-quaternary hover:animate-pulse">
                <a href={job.link}>{job.company}</a>
              </span>
            </h3>
            <ExperienceTime startTime={job.startTime} endTime={job.endTime} />
            <ul className="pl-5 pt-3">
              {job.description.map((desc: string, index: number) => (
                <li key={index} className="flex text-quaternary">
                  {"▹"}
                  <span className="pl-2">{desc}</span>
                </li>
              ))}
              <div className="pt-2 flex gap-2 flex-wrap">
                {job.technologies.map((tech: string, index: number) => (
                  <li key={index}>
                    <TextButton text={tech} />
                  </li>
                ))}
              </div>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
