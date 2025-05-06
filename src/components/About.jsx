import React from 'react';
import { Code2, Palette, Terminal, Rocket, Cpu, Database, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, percentage, color }) => {
  return (
    <div className="mb-4 group">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
          {name}
        </span>
        <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className={`h-2.5 rounded-full ${color} relative`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, type: "spring" }}
          whileHover={{
            scaleX: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <motion.span 
            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
            initial={{ x: "-100%" }}
            whileHover={{ 
              x: "100%",
              transition: { duration: 0.8, repeat: Infinity }
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      className="relative flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group"
      whileHover={{ 
        y: -10,
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Efecto de brillo al hacer hover */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent animate-[pulse_6s_linear_infinite] w-full h-full" />
        </div>
      </div>
      
      {/* Efecto de partículas */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-400 rounded-full"
            initial={{ 
              scale: 0,
              opacity: 0.6,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2
            }}
            whileHover={{
              scale: [1, 1.5, 0],
              opacity: [0.6, 0.3, 0],
              transition: { 
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: Math.random() * 2
              }
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-blue-600 bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="relative z-10 text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="relative z-10 text-gray-600 group-hover:text-gray-800 transition-colors">
        {description}
      </p>
      
      {/* Efecto de borde animado */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <motion.div 
          className="absolute inset-0 border-2 border-transparent"
          initial={{ clipPath: "inset(0 0 98% 0)" }}
          whileHover={{
            clipPath: "inset(0 0 0% 0)",
            borderColor: "rgba(59, 130, 246, 0.5)",
            transition: { duration: 0.8, ease: "easeOut" }
          }}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  const frontendSkills = [
    { name: "React", percentage: 90, color: "bg-blue-500" },
    { name: "Next.js", percentage: 85, color: "bg-blue-400" },
    { name: "JavaScript", percentage: 95, color: "bg-yellow-500" },
    { name: "TypeScript", percentage: 80, color: "bg-blue-600" },
    { name: "Tailwind CSS", percentage: 92, color: "bg-cyan-500" },
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 88, color: "bg-green-500" },
    { name: "Express", percentage: 85, color: "bg-green-400" },
    { name: "Python", percentage: 75, color: "bg-yellow-400" },
    { name: "MongoDB", percentage: 82, color: "bg-green-600" },
    { name: "PostgreSQL", percentage: 78, color: "bg-blue-400" },
  ];

  const designSkills = [
    { name: "UI/UX Design", percentage: 85, color: "bg-purple-500" },
    { name: "Canvas", percentage: 80, color: "bg-purple-400" },
    { name: "DaVinci Resolve", percentage: 70, color: "bg-pink-500" },
    { name: "Responsive Design", percentage: 90, color: "bg-indigo-500" },
    { name: "Upscayl", percentage: 75, color: "bg-purple-600" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-5xl font-bold text-center text-gray-900 mb-16 relative"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="relative inline-block">
            Sobre Mí
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </span>
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Code2 className="w-6 h-6" />}
            title="Frontend Development"
            description="Creación de interfaces modernas con React, Next.js y Tailwind CSS. Experto en performance y UX."
          />
          <FeatureCard
            icon={<Terminal className="w-6 h-6" />}
            title="Backend Development"
            description="Desarrollo de APIs robustas con Node.js y Express. Experiencia con bases de datos SQL y NoSQL."
          />
          <FeatureCard
            icon={<Palette className="w-6 h-6" />}
            title="UI/UX Design"
            description="Diseño de interfaces intuitivas centradas en el usuario."
          />
        </div>

        <motion.div 
          className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
        >
          {/* Efecto de fondo animado */}
          <div className="absolute inset-0 overflow-hidden opacity-0 hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30" />
          </div>
          
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8 relative flex items-center justify-center">
            <Zap className="text-yellow-400 mr-3 animate-pulse" />
            <span>Mis Habilidades Técnicas</span>
            <Zap className="text-yellow-400 ml-3 animate-pulse delay-100" />
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div>
              <div className="flex items-center mb-4 group">
                <Code2 className="w-5 h-5 text-blue-500 mr-2 group-hover:animate-bounce" />
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  Frontend
                </h4>
              </div>
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
            
            <div>
              <div className="flex items-center mb-4 group">
                <Terminal className="w-5 h-5 text-green-500 mr-2 group-hover:animate-bounce" />
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                  Backend
                </h4>
              </div>
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
            
            <div>
              <div className="flex items-center mb-4 group">
                <Palette className="w-5 h-5 text-purple-500 mr-2 group-hover:animate-bounce" />
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                  Diseño
                </h4>
              </div>
              {designSkills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-start relative">
              <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors">
                <Rocket className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Mi Enfoque
                </h4>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  Creo en soluciones tecnológicas que no solo funcionen bien, sino que también deleiten a los usuarios. 
                  Mi desarrollo combina código limpio, diseño atractivo y performance óptima.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-start relative">
              <div className="bg-green-100 p-3 rounded-full mr-4 group-hover:bg-green-200 transition-colors">
                <Cpu className="w-5 h-5 text-green-600 group-hover:rotate-12 transition-transform" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Tecnologías Favoritas
                </h4>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  React, Next.js, Node.js, TypeScript y Tailwind CSS son mis herramientas principales. 
                  Siempre aprendiendo nuevas tecnologías para mantenerme a la vanguardia.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}