import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-200"
    >
      {icon}
    </a>
  );
}

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-down">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Federico Zamora
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Creando experiencias digitales con código limpio y diseño creativo.
            Especializado en React, Node.js y tecnologías web modernas.
          </p>
          <div className="flex justify-center space-x-6">
            <SocialLink href="https://github.com/Daltex-616" icon={<Github />} />
            <SocialLink href="https://www.linkedin.com/in/federiconzamora-/" icon={<Linkedin />} />
            <SocialLink href="mailto:federicozamora616@gmail.com" icon={<Mail />} />
          </div>
        </div>
      </div>
    </div>
  );
}
