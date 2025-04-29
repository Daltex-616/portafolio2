import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import img1 from "../assets/project_1.png";
import img2 from "../assets/project_2.png";
import img3 from "../assets/project_3.png";
import img4 from "../assets/project_7.png";
import img5 from "../assets/project_8.png";

const projects = [
  {
    title: "Luxuri",
    description: "Plataforma de transporte ejecutivo con reservas en tiempo real.",
    image: img4,
    tags: ["React", "Tailwind CSS", "Node.js"],
    githubLink: "https://github.com/Daltex-616/luxury",
    liveLink: "https://luxurytransfer.com.ar/"
    
  },
  {
    title: "DigiQuizt",
    description: "Juego interactivo de preguntas sobre el universo Digimon con puntuaciones globales.",
    image: img2,
    tags: ["React", "Zustand", "Tailwind CSS"],
    githubLink: "https://github.com/Daltex-616/DigimonQuiz",
    liveLink: "https://digimonquiz.onrender.com/"
  },
  {
    title: "API FastAPI",
    description: "Backend robusto para sistema de alertas ecológicas con autenticación JWT.",
    image: img3,
    tags: ["Python", "FastAPI", "MongoDB"],
    githubLink: "https://github.com/Daltex-616/ecoalert_fastapi",
    liveLink: "https://github.com/Daltex-616/ecoalert_fastapi"
  },
  {
    title: "E-Commerce de Servicios",
    description: "Plataforma de servicios gaming con carrito de compras y pasarela de pagos.",
    image: img5,
    tags: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/Daltex-616/ledbolt",
    liveLink: "https://ledbolt.netlify.app/"
  },
  {
    title: "Faculty Management",
    description: "Sistema de gestión académica para instituciones educativas (en desarrollo).",
    image: "https://img.freepik.com/vector-gratis/estilo-roto-pronto-viene-plantilla-promocional-publicaciones-redes-sociales_1017-55783.jpg?semt=ais_hybrid",
    tags: ["React", "Electron", "SQL"],
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    title: "Unidep",
    description: "Aplicación que muestra deportes universitarios con geolocalización en tiempo real.",
    image: img1,
    tags: ["React", "Material UI", "Redux"],
    githubLink: "https://github.com/Daltex-616/UniDep-Pilar-Tecno",
    liveLink: "https://unidep.onrender.com/"
  }
];

const ProjectCard = ({ title, description, image, tags, githubLink, liveLink, index }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <div className="flex space-x-2">
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 text-gray-700" />
            </motion.a>
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5 text-gray-700" />
            </motion.a>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <motion.a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          whileHover={{ x: 5 }}
        >
          Ver proyecto <ArrowRight className="ml-1 w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Algunos de mis trabajos más recientes y desafiantes
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
        
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/Daltex-616"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver más proyectos en GitHub
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}