import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaRegEnvelope } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-12 pb-6 relative overflow-hidden">
      {/* Efecto de partículas */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Branding */}
          <motion.div 
            className="text-center lg:text-left mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Federico Zamora
            </h3>
            <p className="text-gray-400 mt-2 max-w-md">
              Desarrollador Full Stack apasionado por crear soluciones innovadoras
            </p>
          </motion.div>
          
          {/* Contacto y Redes */}
          <div className="flex flex-col sm:flex-row gap-8">
            <motion.div
              className="mb-6 sm:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-3">Conectemos</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/federiconzamora-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin size={18} />
                </motion.a>
                <motion.a
                  href="https://github.com/Daltex-616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={18} />
                </motion.a>
                <motion.a
                  href="mailto:federicozamora616@gmail.com"
                  className="bg-gray-700 hover:bg-emerald-600 text-white p-3 rounded-full transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaRegEnvelope size={18} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-3">Navegación</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition">Sobre mí</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition">Proyectos</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition">Contacto</a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div 
          className="my-8 border-t border-gray-700"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-gray-500 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            &copy; {new Date().getFullYear()} Federico Zamora. Todos los derechos reservados.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center text-gray-400 hover:text-white transition"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -3 }}
          >
            Volver arriba
            <FiArrowUp className="ml-2" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};