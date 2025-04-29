import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowRight, Code, Cpu, Layout } from "lucide-react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SocialLink = ({ href, icon, delay }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative p-3 rounded-full bg-gray-800 hover:bg-gradient-to-br from-blue-600 to-emerald-500 transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ 
        y: -5,
        scale: 1.1,
        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
      }}
    >
      {icon}
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {href.includes('github') ? 'GitHub' : 
         href.includes('linkedin') ? 'LinkedIn' : 'Email'}
      </span>
    </motion.a>
  );
};

const TechBubble = ({ icon, name, x, y, delay }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 shadow-lg group"
      initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
      animate={{ scale: 1, opacity: 1, x: x, y: y }}
      transition={{ 
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: delay
      }}
      whileHover={{
        scale: 1.2,
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        borderColor: "rgba(16, 185, 129, 0.5)",
        transition: { duration: 0.3 }
      }}
    >
      {icon}
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </span>
    </motion.div>
  );
};

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Full Stack Developer", "UI/UX Enthusiast"];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const roleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden relative"
      ref={ref}
    >
      {/* Partículas de fondo */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/20"
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            width: Math.random() * 10 + 2,
            height: Math.random() * 10 + 2,
            opacity: 0
          }}
          animate={{
            y: [null, (Math.random() - 0.5) * 100 + scrollY * 0.2],
            opacity: [0, 0.4, 0],
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, type: "spring" }
              }
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Federico Zamora
            </span>
          </motion.h1>

          <div className="h-10 mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRole}
                className="text-xl md:text-2xl text-gray-300 font-medium"
                variants={roleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {roles[currentRole]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, delay: 0.2 }
              }
            }}
          >
            Creando experiencias digitales con código limpio y diseño creativo.
            Especializado en tecnologías web modernas y soluciones escalables.
          </motion.p>

          <motion.div 
            className="flex justify-center space-x-6 mb-16"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
              }
            }}
          >
            <SocialLink 
              href="https://github.com/Daltex-616" 
              icon={<Github className="w-5 h-5" />} 
              delay={0.3}
            />
            <SocialLink 
              href="https://www.linkedin.com/in/federiconzamora-/" 
              icon={<Linkedin className="w-5 h-5" />} 
              delay={0.4}
            />
            <SocialLink 
              href="mailto:federicozamora616@gmail.com" 
              icon={<Mail className="w-5 h-5" />} 
              delay={0.5}
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, delay: 0.6 }
              }
            }}
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-medium hover:shadow-lg transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver mis proyectos
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech bubbles floating around */}
      <TechBubble 
        icon={<Code className="w-5 h-5 text-blue-400" />} 
        name="React" 
        x="-10vw" 
        y="5vh" 
        delay={0.7}
      />
      <TechBubble 
        icon={<Cpu className="w-5 h-5 text-emerald-400" />} 
        name="Node.js" 
        x="15vw" 
        y="-10vh" 
        delay={0.8}
      />
      <TechBubble 
        icon={<Layout className="w-5 h-5 text-purple-400" />} 
        name="Next.js" 
        x="-15vw" 
        y="-15vh" 
        delay={0.9}
      />
    </div>
  );
}
