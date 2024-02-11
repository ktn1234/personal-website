import TextButton from "../components/TextButton";

interface Job {
  company: string;
  title: string;
  time: string;
  description: string[];
  link: string;
  technologies: string[];
}

const jobs: Job[] = [
  {
    company: "Viasat",
    title: "Software Engineer",
    time: "August 2021 - Present",
    description: [
      "Lead the development of a portal and an API for DDI (DNS, DHCP, and IPAM) services to provide a self-service interface for internal employees to manage their own domains and IP addresses",
      "Assisted with integrating DevOps practices into the development lifecycle, including automation for deployment of infrastructure resources, improving CI/CD pipelines, and providing support for internal employees",
      "Built an internal self-service client for Viasat's Configuration Management Database (CMDB) to provide a more efficient way to manage assets",
      "Optimized image pipelines that produced secure internal images for Viasat's infrastructure",
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
      "Vue.js",
      "Github Actions",
      "Go",
      "Azure",
    ],
  },
  {
    company: "Bitsurf",
    title: "Co-Founder Software Engineer",
    time: "May 2018 - August 2018",
    description: [
      "Assisted with the development of Bitsurf's Discovery Engine",
      "Architected and maintained the infrastructure for Bitsurf's platform",
      "Developed the web application for Bitsurf's platform and the backend services to support it",
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
    ],
  },
  {
    company: "Ibble",
    title: "Software Engineer Intern",
    time: "May 2019 - August 2019",
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
    time: "May 2020 - August 2020",
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
    <div id="experience">
      <h1 className="text-3xl drop-shadow-tertiary-glow">Experience</h1>
      <div>
        {jobs.map((job: Job, index: number) => (
          <div key={index} className="pt-5">
            <h3 className="text-2xl">
              {job.title} at{" "}
              <span className="font-bold drop-shadow-tertiary-glow">
                <a href={job.link}>{job.company}</a>
              </span>
            </h3>
            <p className="text-quaternary">{job.time}</p>
            <ul className="pl-5 pt-3">
              {job.description.map((desc: string, index: number) => (
                <li key={index} className="text-quaternary">
                  {"▹ "}
                  {desc}
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
    </div>
  );
}

export default Experience;
