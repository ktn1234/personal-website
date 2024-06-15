interface TechDomain {
  name: string;
  tech: string[];
}

const techDomains: TechDomain[] = [
  {
    name: "Languages",
    tech: [
      "Typescript",
      "Go",
      "Node.js",
      "Python",
      "Shell",
      "Javascript",
      "Java",
      "C++",
      "C",
    ],
  },
  {
    name: "Web Frameworks",
    tech: ["React", "Vue.js", "Next.js", "Express.js"],
  },
  {
    name: "Web",
    tech: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "MaterialUI",
      "PWA",
      "REST",
      "GraphQL",
      "gRPC",
      "Crypto",
    ],
  },
  {
    name: "DevOps",
    tech: ["Github Actions", "Jenkins", "Ansible"],
  },
  {
    name: "Cloud",
    tech: ["AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform"],
  },
];

function Technologies(): JSX.Element {
  return (
    <div id="technologies">
      <h1 className="text-3xl text-center drop-shadow-tertiary-glow">
        Technologies
      </h1>
      <div className="flex flex-wrap justify-between pt-5">
        {techDomains.map((techDomain: TechDomain, index: number) => (
          <div key={index} className="mb-5">
            <h3 className="font-bold text-center">{techDomain.name}</h3>
            {techDomain.tech.map((t: string, index: number) => (
              <div key={index}>
                <ul>
                  <li className="text-quaternary">
                    {"▹ "}
                    {t}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
