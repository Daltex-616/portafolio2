import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import img1 from "../assets/project_1.png"
import img2 from "../assets/project_2.png"
import img3 from "../assets/project_3.png"

const projects = [
  {
    title: "Unidep",
    description: "Aplicacion donde muestra los deportes universitarios con geolocalización",
    image: img1,
    tags: ["React", "mui", "Redux"],
    githubLink: "https://github.com/Daltex-616/UniDep-Pilar-Tecno",
    liveLink: "https://unidep.onrender.com/"
  },
  {
    title: "DigiQuizt",
    description: "Juego de preguntas sobre digimon",
    image: img2,
    tags: ["React", "zustand", "Tailwind"],
    githubLink: "https://github.com/Daltex-616/DigimonQuiz",
    liveLink: "https://digimonquiz.onrender.com/"
  },
  {
    title: "API fastapi",
    description: ":O",
    image: img3,
    tags: ["Python", "FastApi", "MongoDB"],
    githubLink: "https://github.com/Daltex-616/ecoalert_fastapi",
    liveLink: "https://github.com/Daltex-616/ecoalert_fastapi"
  },
  {
    title: "E-Commerce De servicios",
    description: ":3",
    image: "https://img.freepik.com/vector-gratis/estilo-roto-pronto-viene-plantilla-promocional-publicaciones-redes-sociales_1017-55783.jpg?semt=ais_hybrid",
    tags: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    title: "Faculty Managment",
    description: ":D",
    image: "https://img.freepik.com/vector-gratis/estilo-roto-pronto-viene-plantilla-promocional-publicaciones-redes-sociales_1017-55783.jpg?semt=ais_hybrid",
    tags: ["React", "Electron", "SQL"],
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    title: "NotiGamer",
    description: "Real-time weather information with interactive maps",
    image: "https://img.freepik.com/vector-gratis/estilo-roto-pronto-viene-plantilla-promocional-publicaciones-redes-sociales_1017-55783.jpg?semt=ais_hybrid",
    tags: ["React", "Tailwind", "Node.Js"],
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  }
];

function ProjectCard({ title, description, image, tags, githubLink, liveLink }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <Github className="w-5 h-5 mr-1" />
            Code
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ExternalLink className="w-5 h-5 mr-1" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}