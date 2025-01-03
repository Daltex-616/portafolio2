import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <strong className="text-2xl font-bold">Daltex</strong>
            <p className="text-sm mt-1">Construyendo soluciones a medida</p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/federiconzamora-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Daltex-616"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>&copy; 2024 Daltex. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};