import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Automated Delivery Locker System",
    description:
      "A Full stack project where my role is to create a Strong and secure backend using NodeJS",
    image: "/projects/delivery_locker.webp",
    tags: ["NodeJS", "ExpressJS", "MongoDB", "Node cron"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/AcesOfBIT/Automated-Delivery-Locker-System-with-Facial-Recognition/tree/backend",
  },
  {
    id: 2,
    title: "Pinterest Clone",
    description:
      "A Clone of a existing web application, Pinterest, using React, NodeJS, MongoDB, TailwindCSS",
    image: "/projects/pinterest.png",
    tags: [
      "React",
      "NodeJS",
      "ExpressJS",
      "RESTful API",
      "MongoDB",
      "TailwindCSS",
    ],
    demoUrl: "https://pinterest-clone-x07h.onrender.com/",
    githubUrl: "https://github.com/tharunkumar-BIT/Pinterest_clone",
  },
  {
    id: 3,
    title: "Smart Parking System",
    description:
      "A real-time Full stack project for large scale vehicle parking system",
    image: "/projects/smart-parking-system.png",
    tags: ["React", "NodeJS", "ExpressJS", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/tharunkumar-BIT/Smart_parking_system",
  },
  // {
  //   id: 3,
  //   title: "Home Automation",
  //   description:
  //     "A hardware project for automating the Home appliances using Google Assistant",
  //   image: "/projects/homeAutomation.jpg",
  //   tags: ["Arduino UNO", "Nodemcu ESP8266", "Google Assistant"],
  //   demoUrl: "#",
  //   githubUrl: "https://github.com/tharunkumar-BIT/Home-automation",
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" data-aos="fade-up" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my Projects. Each project was carefully crafted with
          attention to details, performance and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              data-aos="flip-left"
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full"
            >
              <div className="h-45 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col h-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium rounded-full border border-primary/30 bg-primary/20 text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={25} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/tharunkumar-BIT"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
